$(document).ready(function () {
    'use strict';
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    var rockford = document.getElementById('mb1'),
            keymaster = document.getElementById('mb2'),
            gatekeeper = document.getElementById('mb3'),
            area = document.getElementById('xflash'),
            posLeft = 0,
            posTop = 0,
            km_posLeft = 0,
            km_posTop = 0,
            km_direction = true,
            gk_posLeft = 0,
            gk_posTop = 0,
            gk_direction = true,
            last_km_move = 1,
            last_gk_move = 1,
            km_start,
            gk_start,
            tileSize = 32,
            gridSize = 19,
            foundKey = false,
            keytile,
            exittile,
            xgrid,
            i, j, xxexit, xkey,
            /**
             * This is the background for the game area.
             */
            /*
             gameArea = [
             13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,13,
             14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,
             13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,13,
             14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,
             13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,13,
             14,12,13,14,12,13,14,16,16,14,12,16,17,12,13,14,12,13,14,12,13,14,12,13,13,
             13,14,12,13,14,12,13,14,16,17,14,17,13,15,12,13,14,12,13,14,12,13,14,12,13,
             12,13,14,12,13,14,12,13,15,15,13,14,12,16,14,12,13,14,12,13,14,12,13,14,13,
             14,12,13,14,12,13,14,12,15,15,17,17,16,12,13,14,12,13,14,12,13,14,12,13,13,
             13,14,12,13,14,12,13,14,12,17,17,15,13,14,12,13,14,12,13,14,12,13,14,12,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,17,17,12,13,14,12,13,14,12,13,14,13,
             14,12,13,14,12,13,14,16,13,14,12,13,14,17,16,16,16,13,14,12,13,14,12,13,13,
             13,14,12,13,14,12,13,14,12,13,14,17,13,14,12,16,16,12,13,13,14,13,14,13,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,13,17,12,13,12,12,13,14,13,14,13,13,
             14,12,13,14,12,13,14,12,13,14,12,13,14,15,16,14,12,14,13,13,13,13,13,13,13,
             13,14,12,13,14,12,13,14,12,13,14,12,13,15,15,13,12,13,13,13,13,13,13,13,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,14,13,13,13,13,13,13,13,13,
             14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,13,13,13,13,13,13,
             13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,13,13,13,13,13,
             12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,13,13,13,13,
             14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,13,13,13,
             14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,13,13,13
             ],
             */
            /**
             * This is the background for the game area.
             */
            gameArea = [
                13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
                12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
                14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
                13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
                12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
                14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14,
                13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13,
                12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
                14, 12, 13, 14, 12, 13, 14, 16, 16, 14, 12, 16, 17, 12, 13, 14, 12, 13, 14,
                13, 14, 12, 13, 14, 12, 13, 14, 16, 17, 14, 17, 13, 15, 12, 13, 14, 12, 13,
                12, 13, 14, 12, 13, 14, 12, 13, 15, 15, 13, 14, 12, 16, 14, 12, 13, 14, 12,
                14, 12, 13, 14, 12, 13, 14, 12, 15, 15, 17, 17, 16, 12, 13, 14, 12, 13, 14,
                13, 14, 12, 13, 14, 12, 13, 14, 12, 17, 17, 15, 13, 14, 12, 13, 14, 12, 13,
                12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 17, 17, 12, 13, 14, 12,
                14, 12, 13, 14, 12, 13, 14, 16, 13, 14, 12, 13, 14, 17, 16, 16, 16, 13, 14,
                13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 17, 13, 14, 12, 16, 16, 12, 13,
                12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 17, 12, 13, 12, 12,
                14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 16, 14, 12, 14, 13,
                13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 15, 15, 13, 12, 13, 13
            ],
            /**
             * These are blocks that cant be moved to, or something happens when you try to move on them.
             * The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
             */
            gameBlocks = [];

    /**
     * Draw the initial gameplan
     */
    function drawGamePlan(gameArea, gameBlocks) {
        var k, e, placekey, placeexit;

        // drop the key in a random open tile
        do {
            placekey = Cramse.getRandom(0, gameArea.length);
        } while (gameBlocks[placekey] !== 10 || placekey < 30);
        gameArea[placekey] = 24;
        xkey = placekey;

        // place exit in a random open tile
        do {
            placeexit = Cramse.getRandom(0, gameArea.length);
        } while (gameBlocks[placeexit] !== 10 || placeexit === placekey || placeexit < 30);
        gameArea[placeexit] = 26;
        xxexit = placeexit;

        for (k = 0; k < gameArea.length; k += 1) {
            e = document.createElement('div');
            e.innerHTML = '';
            e.className = 'tile t' + gameArea[k] + (gameBlocks[k] ? ' b' + gameBlocks[k] : '');
            e.id = 'n' + k;
            area.appendChild(e);
            if (gameArea[k] === 24) {
                keytile = e.id;
            }
            if (gameArea[k] === 26) {
                exittile = e.id;
            }
        }
    }

    var calculateCoords = function (index) {
        var coords;
        return coords = {
            col: (index) % gridSize,
            row: Math.ceil(index / gridSize)
        };
    };

    /**
     * Move Rockford
     */
    var move = function (moveLeft, moveTop, which) {

        function moveIt() {
            rockford.style.left = (area.offsetLeft + posLeft * tileSize + tileSize / 2) + 'px';
            rockford.style.top = (area.offsetTop + posTop * tileSize + tileSize / 2) + 'px';
            //console.log("Moved to: " + rockford.style.left + "x" + rockford.style.top);
        }

        if (which) {
            rockford.className = 'mbaddie ' + which;
        }

        if (!(gameBlocks[(posLeft + moveLeft) + (posTop + moveTop) * gridSize] - 10)) {
            posLeft += moveLeft;
            posTop += moveTop;
            checkPosition((area.offsetLeft + posLeft * tileSize + tileSize / 2), (area.offsetTop + posTop * tileSize + tileSize / 2));
            moveIt();
        } else {
            console.log('Block detected, cant move.');
        }
    };

    function checkPosition(pleft, ptop) {
        var poskey = Cramse.getOffset(document.getElementById(keytile));
        var posexit = Cramse.getOffset(document.getElementById(exittile));
        var posrock = {left: pleft, top: ptop}

        if (Math.abs(posrock.left - poskey.left) < 16 && Math.abs(posrock.top - poskey.top) < 16 && !foundKey) {
            console.log('Key found!');
            foundKey = true;
            document.getElementById(keytile).className = 'tile t13 b10';
            document.getElementById(exittile).className = 'tile t25 b10';
            alert('You found the key! Now move on to the exit.');
            gameBlocks[exittile] = 10;
        }

        if (Math.abs(posrock.left - posexit.left) < 16 && Math.abs(posrock.top - posexit.top) < 16 && foundKey) {
            console.log('Exit found!');
            alert('You made it to the next level! ');
            location.reload(); // Start allover with new level
        }
    }

    /**
     * Move Keymaster
     */
    var moveKM = function (moveLeft, moveTop, which) {
        function moveItKM() {
            var rockpos = Cramse.getOffset(document.getElementById('mb1'));
            var kmpos = Cramse.getOffset(document.getElementById('mb2'));
            keymaster.style.left = (area.offsetLeft + km_posLeft * tileSize + tileSize / 2) + 'px';
            keymaster.style.top = (area.offsetTop + km_posTop * tileSize + tileSize / 2) + 'px';

            if (Math.abs(rockpos.left - kmpos.left) < 16 && Math.abs(rockpos.top - kmpos.top) < 16) {
                console.log('Caught by the Keymaster!');
                alert('GAME OVER' + '\n' + 'Caught by the Keymaster!');
                location.reload(); // Start allover with new level
            }
        }

        if (which) {
            keymaster.className = 'mbaddie2 ' + which;
        }

        if (!(gameBlocks[(km_posLeft + moveLeft) + (km_posTop + moveTop) * gridSize] - 10)) {
            km_posLeft += moveLeft;
            km_posTop += moveTop;
            km_direction = true;
            moveItKM();
        } else {
            km_direction = false;
            //console.log('Block detected, cant move.');
        }
    };

    /**
     * Keymaster movement
     */
    var kmMovement = function () {
        var rand;
        if (km_direction) {
            rand = last_km_move;
        } else {
            rand = Cramse.getRandom(1, 4);
            last_km_move = rand;
        }
        switch (rand) {
            case 1:
                moveKM(-1, 0, 'mleft');
                break;
            case 2:
                moveKM(1, 0, 'mright');
                break;
            case 3:
                moveKM(0, -1, 'mup');
                break;
            case 4:
                moveKM(0, 1, 'mdown');
                break;
            default:
                moveKM(0, 0, 'mdown');
                break;
        }
    }

    /**
     * Move Gatekeeper
     */
    var moveGK = function (moveLeft, moveTop, which) {
        function moveItGK() {
            var grockpos = Cramse.getOffset(document.getElementById('mb1'));
            var gkpos = Cramse.getOffset(document.getElementById('mb3'));
            gatekeeper.style.left = (area.offsetLeft + gk_posLeft * tileSize + tileSize / 2) + 'px';
            gatekeeper.style.top = (area.offsetTop + gk_posTop * tileSize + tileSize / 2) + 'px';

            if (Math.abs(grockpos.left - gkpos.left) < 16 && Math.abs(grockpos.top - gkpos.top) < 16) {
                console.log('Caught by the Gatekeeper!');
                alert('GAME OVER' + '\n' + 'Caught by the Gatekeeper!');
                location.reload(); // Start allover with new level
            }
        }

        if (which) {
            gatekeeper.className = 'mbaddie3 ' + which;
        }

        if (!(gameBlocks[(gk_posLeft + moveLeft) + (gk_posTop + moveTop) * gridSize] - 10)) {
            gk_posLeft += moveLeft;
            gk_posTop += moveTop;
            gk_direction = true;
            moveItGK();
        } else {
            gk_direction = false;
            //console.log('Block detected, cant move.');
        }
    };

    /**
     * Gatekeeper movement
     */
    var gkMovement = function () {
        var rand;
        if (gk_direction) {
            rand = last_gk_move;
        } else {
            rand = Cramse.getRandom(1, 4);
            last_gk_move = rand;
        }
        switch (rand) {
            case 1:
                moveGK(-1, 0, 'mleft');
                break;
            case 2:
                moveGK(1, 0, 'mright');
                break;
            case 3:
                moveGK(0, -1, 'mup');
                break;
            case 4:
                moveGK(0, 1, 'mdown');
                break;
            default:
                moveGK(0, 0, 'mdown');
                break;
        }
    }

// Get maze
    xgrid = Maze.getGrid(gridSize);
// Draw maze
    for (i = 0; i < gridSize; i += 1) {
        for (j = 0; j < gridSize; j += 1) {
            gameBlocks.push(xgrid[i][j]);
        }
    }

    if (sPage === 'kmom02') {

        console.log('Drawing gameplan.');
        drawGamePlan(gameArea, gameBlocks);
        km_start = calculateCoords(xkey);
        console.log(km_start);
        gk_start = calculateCoords(xxexit);
        console.log(gk_start);

        //console.log('Moving Rockford to initial spot.');
        move(1, 1, 'mdown');
        moveKM(km_start.col, km_start.row - 1, 'mdown');
        moveGK(gk_start.col, gk_start.row - 1, 'mdown');

        // Start animating monsters
        window.setInterval(kmMovement, 150);
        keymaster.className = 'mbaddie2 mdown';
        window.setInterval(gkMovement, 120);
        gatekeeper.className = 'mbaddie3 mdown';

        /**
         * Keep track on keys pressed and move Rockford accordingly.
         */
        document.onkeydown = function (event) {
            var key;
            key = event.keyCode || event.which;
            switch (key) {
                case 37:
                    move(-1, 0, 'mleft');
                    break;
                case 39:
                    move(1, 0, 'mright');
                    break;
                case 38:
                    move(0, -1, 'mup');
                    break;
                case 40:
                    move(0, 1, 'mdown');
                    break;
                default:
                    move(0, 0, 'mdown');
                    break;
            }
            //console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + rockford.offsetLeft + ', ' + rockford.offsetTop);
        };

        console.log('Everything is ready.');
    } else {
        console.log('Not the gamepage');
    }
});
