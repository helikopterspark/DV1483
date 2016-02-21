// Based on code from:
// http://stackoverflow.com/questions/23530756/maze-recursive-division-algorithm-design
// http://jsfiddle.net/tPm3s/1/
window.Maze = (function(window) {
    var private, Maze = {};
    var grid;

    function generate(dimensions) {
        var i, j, ent;
        grid = [];
        for (i = 0; i < dimensions; i += 1) {
            grid[i] = [];

            for (j = 0; j < dimensions; j += 1) {
                grid[i][j] = 10;
            }
        }

        ent = addEntrance();
        addInnerWalls(true, 1, grid.length - 2, 1, grid.length - 2, ent);
        addOuterWalls();
    }

    function addOuterWalls() {
        var i, j;
        for (i = 0; i < grid.length; i += 1) {
            if (i === 0 || i === (grid.length - 1)) {
                for (j = 0; j < grid.length; j += 1) {
                    grid[i][j] = 19;
                }
            } else {
                grid[i][0] = 19;
                grid[i][grid.length - 1] = 19;
            }
        }
        grid[1][0] = 13;
    }

    function addEntrance() {
        var x = randomNumber(1, grid.length - 1);
        grid[grid.length - 1][x] = 10;
        return x;
    }

    function addInnerWalls(h, minX, maxX, minY, maxY, gate) {
        var x, y;
        if (h) {

            if (maxX - minX < 2) {
                return;
            }

            y = Math.floor(randomNumber(minY, maxY)/2)*2;
            addHWall(minX, maxX, y);

            addInnerWalls(!h, minX, maxX, minY, y-1, gate);
            addInnerWalls(!h, minX, maxX, y + 1, maxY, gate);
        } else {
            if (maxY - minY < 2) {
                return;
            }

            x = Math.floor(randomNumber(minX, maxX)/2)*2;
            addVWall(minY, maxY, x);

            addInnerWalls(!h, minX, x-1, minY, maxY, gate);
            addInnerWalls(!h, x + 1, maxX, minY, maxY, gate);
        }
    }

    function addHWall(minX, maxX, y) {
        var i;
        var hole = Math.floor(randomNumber(minX, maxX)/2)*2+1;

        for (i = minX; i <= maxX; i += 1) {
            if (i === hole) { grid[y][i] = 10; }
            else { grid[y][i] = 11; }
        }
    }

    function addVWall(minY, maxY, x) {
        var i;
        var hole = Math.floor(randomNumber(minY, maxY)/2)*2+1;

        for (i = minY; i <= maxY; i += 1) {
            if (i === hole) { grid[i][x] = 10; }
            else { grid[i][x] = 11; }
        }
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    Maze.getGrid = function(gridsize) {
        generate(gridsize);
        return grid;
    }

    return Maze;

})(window);
