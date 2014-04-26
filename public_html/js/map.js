/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Matrix(row, col) {
    this.mat = [];
    for (var i = 0; i < row; ++i) {
        this.mat[i] = []; //new Array(col);
        for (var j = 0; j < col; ++j) {
            this.mat[i][j] = 0;
        }
    }
    this.nrows = row;
    this.ncols = col;
    this.get = function(x, y) {
        return this.mat[x][y];
    };
    this.set = function(x, y, val) {
        this.mat[x][y] = val;
    };
    this.dump = function() {
        for (var i = 0; i < row; ++i) {
            console.log(this.mat[i]);
        }
    };
}
function GameObject(name, i, j, fill) {
    this.name = name;
    this.i = i;
    this.j = j;
    this.fill = fill;
    this.delete = false;

    this.move = function(x, y) {
        if (x !== undefined) {
            this.j += x;
        }
        if (y !== undefined) {
            this.i += y;
        }
    };
    this.draw = function(grid) {
        grid.insert([this.i, this.j], this.fill);
        if (this.i > grid.size[0] || this.j > grid.size[1])
            this.delete = true;
    };
}

function Map() {
    this.renderables = [];

    this.addGameObject = function(go) {
        this.renderables.push(go);
    };
    this.removeGameObject = function() {
//        var index = -1;
        var dInd = [];
        for (var i = 0; i < this.renderables.length; ++i) {
            if (this.renderables[i].delete === true) {
                dInd.push(i);
            }
        }
        for(var i=0; i<dInd.length; ++i) {
            this.renderables.splice(dInd[i], 1);
        }
//        if (index > 0) {
//            this.renderables.splice(index, 1);
//        }

    };
    this.draw = function(grid, matrixMap) {
        this.removeGameObject();
        if (grid !== undefined && matrixMap !== undefined) {
            for (var i = 0; i < matrixMap.nrows; ++i) {
                for (var j = 0; j < matrixMap.ncols; ++j) {
                    if (matrixMap.get(i, j) !== 0)
                        grid.insert([i, j], "green");
                }
            }
            if (this.renderables !== null) {
                //draw them
                for (var i = 0; i < this.renderables.length; ++i) {
                    var go = this.renderables[i];
                    go.draw(grid);
                }
            }
        } else {
            console.log("grid or map is undefined");
        }
    };
}