/**
* Shim layer, polyfill, for requestAnimationFrame with setTimeout fallback.
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
*/
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

/**
* Shim layer, polyfill, for cancelAnimationFrame with setTimeout fallback.
*/
window.cancelRequestAnimFrame = (function(){
    return  window.cancelRequestAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    window.clearTimeout;
})();

/**
 * Trace the keys pressed
 * http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/index.html
 */
window.Key = {
  pressed: {},

  LEFT:   37,
  UP:     38,
  RIGHT:  39,
  DOWN:   40,
  SPACE:  32,
  A:      65,
  S:      83,
  D:      68,
  W:      87,

  isDown: function(keyCode, keyCode1) {
    return this.pressed[keyCode] || this.pressed[keyCode1];
  },

  onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
};
window.addEventListener('keyup',   function(event) { Key.onKeyup(event);},   false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event);}, false);

// All objects are vectors
function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype = {
    // Multiply with scalar
    muls: function(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    },

    // Multiply itself with scalar
    imuls: function(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    },

    // Add with scalar
    adds: function(scalar) {
        return new Vector(this.x + scalar, this.y + scalar);
    },

    // Add itself with Vector
    iadd: function(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    },
}

// The forces around us
function Forces() {
    this.all = {};
}

Forces.prototype = {
    createAcceleration: function(vector) {
        return function(velocity, td) {
            velocity.iadd(vector.muls(td));
        }
    },

    createDamping: function(damping) {
        return function(velocity, td) {
            velocity.imuls(damping);
        }
    },

    createWind: function(vector) {
        return function(velocity, td) {
            velocity.iadd(vector.adds(td));
        }
    },

    addAcceleration: function(name, vector) {
        this.all[name] = this.createAcceleration(vector);
    },

    addDamping: function(name, damping) {
        this.all[name] = this.createDamping(damping);
    },

    addWind: function(name, vector) {
        this.all[name] = this.createWind(vector);
    },

    update: function(object, td) {
        for (var force in this.all) {
            if (this.all.hasOwnProperty(force)) {
                this.all[force](object, td);
            }
        }
    },
}

window.Forces = new Forces();
window.Forces.addAcceleration('gravity', new Vector(0, 9.82));
window.Forces.addDamping('drag', 0.47);
window.Forces.addWind('wind', new Vector(0.5, 0));

// Asteroid class
var Asteroid = function(canvasWidth, canvasHeight, image) {
    this.radius = 5 + (Math.random() * 10);
    this.x = canvasWidth + this.radius + Math.floor(Math.random() * canvasWidth);
    this.y = Math.floor(Math.random() * canvasHeight);
    this.vX = -5 - (Math.random() * 5);
    this.image = image || null;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = Math.abs(this.vX) / 2;
    this.numberOfFrames = 19;
}

Asteroid.prototype = {

    draw: function(ctx, canvasWidth, canvasHeight) {
        var margin = 1.16;  // Compensate for margin in image
        this.x += this.vX;

        if (this.x + this.radius < 0) {
            this.radius = 5 + (Math.random() * 10);
            this.x = canvasWidth + this.radius;
            this.y = Math.floor(Math.random( ) * canvasHeight);
            this.vX = -5 - (Math.random() * 5);
            this.ticksPerFrame = Math.abs(this.vX) / 2;
        };

        ctx.drawImage(
            this.image,
            this.frameIndex * this.image.width / this.numberOfFrames,
            0,
            this.image.width / this.numberOfFrames,
            this.image.height,
            this.x - this.radius,
            this.y - this.radius,
            (this.radius*2)*margin,
            (this.radius*2)*margin);
    },

    update: function() {
        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            // If the current frame index is in range
            if (this.frameIndex < this.numberOfFrames - 1) {
                // Go to the next frame
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }
        }
    },

    detectCollision: function(plr) {
        var dX = plr.position.x - this.x;
        var dY = plr.position.y - this.y;
        var distance = Math.sqrt((dX * dX) + (dY * dY));
        if (distance < plr.halfWidth + this.radius) {
            return true;
        } else {
            return false;
        };
    },
}

// Player class
var Player = function(position, image, velocity, speed, direction, accelerateForce, breakForce, dampForce) {
    this.width = 24;
    this.height = 24;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;

    this.position = position || new Vector();
    this.velocity = velocity || new Vector();
    this.speed = speed || new Vector();
    this.direction = direction || 0;
    this.accelerateForce = accelerateForce || Forces.createAcceleration(new Vector(270, 270));
    this.breakForce = breakForce || Forces.createDamping(0.97);
    this.dampForce = dampForce || Forces.createDamping(0.999);
    this.image = image || null;

    this.moveRight = false;

    this.flameLength = 30;

};

Player.prototype = {
    draw: function(ctx, canvasWidth, canvasHeight) {

        if (this.moveRight) {
            this.drawFlame(ctx);
        };

        this.stayInArea(canvasWidth, canvasHeight);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.halfWidth, this.position.y);
        ctx.lineTo(this.position.x - this.halfWidth, this.position.y - this.halfHeight);
        ctx.lineTo(this.position.x - this.halfWidth, this.position.y + this.halfHeight);
        ctx.clip();
        ctx.closePath();
        ctx.fill();
        ctx.drawImage(this.image, this.position.x - this.halfWidth, this.position.y - this.halfHeight);
        ctx.restore();

        this.moveRight = false;
    },

    drawExplosion: function(ctx, image) {
        ctx.drawImage(image, this.position.x - this.halfWidth*2, this.position.y - this.halfHeight*2);
    },

    drawFlame: function(ctx) {
        ctx.save();
        ctx.translate(this.position.x - this.halfWidth, this.position.y);

        if (this.flameLength == 30) {
            this.flameLength = 15;
        } else {
            this.flameLength = 30;
        };

        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.lineTo(-this.flameLength, 0);
        ctx.lineTo(0, 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    },

    throttle: function(td) {
        this.accelerateForce(this.speed, td);
    },

    breaks: function(td) {
        this.breakForce(this.speed, td);
        this.breakForce(this.velocity, td);
    },

    moveUpY: function(td) {
        this.dampForce(this.speed, td);
        this.position.y -= this.speed.y * Math.cos(this.direction) * td + 1;
        this.position.iadd(this.velocity.muls(td));
    },

    moveDownY: function(td) {
        this.dampForce(this.speed, td);
        this.position.y += this.speed.y * Math.cos(this.direction) * td + 1;
        this.position.iadd(this.velocity.muls(td));
    },

    moveForward: function(td) {
        this.dampForce(this.speed, td);
        this.position.x += this.speed.x * Math.cos(this.direction) * td;
        this.position.iadd(this.velocity.muls(td));
    },

    moveBackward: function(td) {
        this.dampForce(this.speed, td);
        this.position.x -= 2;
    },

    stayInArea: function(canvasWidth, canvasHeight) {
        // Add boundaries
        if (this.position.x - this.halfWidth < 20) {
            this.position.x = 20 + this.halfWidth;
        } else if (this.position.x + this.halfWidth > canvasWidth - 20) {
            this.position.x = canvasWidth - 20 - this.halfWidth;
        }

        if (this.position.y - this.halfHeight < 20) {
            this.position.y = 20 + this.halfHeight;
        } else if (this.position.y + this.halfHeight > canvasHeight - 20) {
            this.position.y = canvasHeight - 20 - this.halfHeight;
        };
    },

    update: function(td) {
        if (Key.isDown(Key.UP, Key.W)) {
            this.moveUpY(td);
        }
        if (Key.isDown(Key.DOWN, Key.S)) {
            this.moveDownY(td);
        }
        if (Key.isDown(Key.RIGHT, Key.D)) {
            this.moveRight = true;
            this.throttle(td);
        } else {
            this.breaks(td);
            this.moveBackward(td);
        }
        this.moveForward(td);
        Forces.update(this.velocity, td);
  },
}

window.Asteroids = (function() {
    // Canvas dimensions
    var canvas;
    var context;
    var canvasWidth;
    var canvasHeight;

    // Background
    var bkgX = 0;
    var bkgDX = 0.3;
    var bkg = new Image();
    bkg.src = '../webroot/img/asteroids/Distant-Galaxy-Stars-Wallpapers-1920x600.jpg';
    //bkg.src = '../webroot/img/asteroids/GalaxyBackground.jpg';

    var spaceshipImage = new Image();
    spaceshipImage.src = '../webroot/img/asteroids/shipsurface.png';

    // http://freegameassets.blogspot.se/2013/09/asteroids-and-planets-if-you-needed-to.html
    var asteroidImage = new Image();
    //asteroidImage.src = '../webroot/img/asteroids/asteroid2.png';
    asteroidImage.src = '../webroot/img/asteroids/asteroid_sprite.png';

    // http://freegameassets.blogspot.se/search?q=explosion
    var explosionImage = new Image();
    explosionImage.src = '../webroot/img/asteroids/explosion2.png';

    // Game settings
    var playGame = false;
    var goScreen;
    var score = 0;
    var scoreTimeout;
    var asteroids;
    var numAsteroids;
    var player;
    var lastGameTick;
    var td;

    // Game UI
    //var ui = $("#gameUI");
    var uiIntro = $("#gameIntro");
    var uiStats = $("#gameStats");
    var uiComplete = $("#gameComplete");
    var uiPlay = $("#gamePlay");
    var uiReset = $(".gameReset");
    var uiScore = $(".gameScore");

    // Sounds
    var soundBackground = $("#gameSoundBackground").get(0);
    var soundThrust = $("#gameSoundThrust").get(0);
    var soundDeath = $("#gameSoundDeath").get(0);

    var init = function(canvas) {
        canvas = $("#gameCanvas");
        context = canvas.get(0).getContext('2d');
        // Canvas dimensions
        canvasWidth = canvas.width();
        canvasHeight = canvas.height();
        uiStats.hide();
        uiComplete.hide();
        resetGame();
        render();

        uiPlay.click(function(e) {
            e.preventDefault();
            render();
            //uiIntro.hide();
            uiIntro.slideUp("fast");
            window.addEventListener('keydown', function (e) {
                if (e.keyCode == 32) {
                    e.preventDefault();
                    Asteroids.startGame(canvas);
                }
            }, false);
        });

        uiReset.click(function(e) {
            e.preventDefault();
            //uiComplete.hide();
            uiComplete.slideUp("fast");
            resetGame();
            render();

            console.log('reset game');
        });
    };

    var resetGame = function() {
        $('body').unbind('keydown');
        clearTimeout(scoreTimeout);
        soundThrust.pause();
        soundBackground.pause();
        playGame = false;
        goScreen = false;
        bkgX = 0;   // reset background

        // Setup asteroids
        asteroids = new Array();
        numAsteroids = 5;
        for (var i = 0; i < numAsteroids; i++) {
            asteroids.push(new Asteroid(canvasWidth, canvasHeight, asteroidImage));
        };

        player = new Player(new Vector(150, canvasHeight / 2), spaceshipImage);
    }

    var startGame = function(canvas) {
        if (!playGame && !goScreen) {
            $('body').bind('keydown', function(e) {
                e.preventDefault(e);
            });
            $('body').css('cursor', 'none');
            // Reset stats
            uiScore.html("0");
            uiStats.show();
            score = 0;

            playGame = true;
            goScreen = false;
            soundBackground.currentTime = 0;
            soundBackground.volume = 0.8;
            soundBackground.play();
            gameLoop();
            timer();
            render();
            console.log('start play');
        };
    };

    var render = function() {
        // Clear
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw background image and repeat when scrolling to the edge
        context.drawImage(bkg, bkgX, 0);
        context.drawImage(bkg, bkg.width - Math.abs(bkgX), 0);

        if (Math.abs(bkgX) > bkg.width) {
            bkgX = 0;
        }
        bkgX -= bkgDX;

        // Draw asteroids
        for (var i = 0; i < asteroids.length; i++) {
            asteroids[i].draw(context, canvasWidth, canvasHeight);
        }

        // Draw player
        if (!goScreen) {
            player.draw(context, canvasWidth, canvasHeight);
        } else {
            player.drawExplosion(context, explosionImage);
        }
    }

    var timer = function() {
        if (playGame) {
            scoreTimeout = setTimeout(function() {
                uiScore.html(++score);
                // Increase number of asteroids on screen
                if (score % 5 == 0) {
                    numAsteroids += 2;
                };
                timer();
            }, 1000);
        };
    };

    var gameover = function() {
        goScreen = true;
        soundThrust.pause();
        soundBackground.pause();

        playGame = false;
        clearTimeout(scoreTimeout);
        uiStats.hide();
        //uiComplete.show();
        uiComplete.slideDown(75);
        $('body').unbind('keydown');
        $('body').css('cursor', '');
        soundDeath.currentTime = 0;
        soundDeath.play();
    }

    var gameLoop = function() {
        var now = Date.now();
        td = (now - (lastGameTick || now)) / 1000;  // Timediff since last frame / gametick
        lastGameTick = now;

        // Increase number of asteroids on screen
        while (asteroids.length < numAsteroids) {
            asteroids.push(new Asteroid(canvasWidth, canvasHeight, asteroidImage));
        }

        if (playGame) {
            requestAnimFrame(gameLoop);
        };
        player.update(td);
        if (player.moveRight && playGame) {
            if (soundThrust.paused) {
                soundThrust.currentTime = 0;
                soundThrust.volume = 0.9;
                soundThrust.play();
            };
        } else {
            soundThrust.pause();
        };
        for (var i = 0; i < asteroids.length; i++) {
            asteroids[i].update();
            if (asteroids[i].detectCollision(player)) {
                gameover();
                break;
            }
        }
        render();
    };

    return {
        'init': init,
        'startGame': startGame,
    }
})();

(function($) {
    $.fn.asteroids = function() {
    Asteroids.init('gameCanvas');

    console.log('Ready to play.');
}

})(jQuery);
