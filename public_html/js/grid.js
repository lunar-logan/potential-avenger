/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Grid(ctx, size, deltaX, deltaY) {
    this.size = size;
    this.ctx = ctx;
    this.deltaX = 10; //10px delta for x-axis
    this.deltaY = 10;

    if (deltaX !== undefined)
        this.deltaX = deltaX;
    if (deltaY !== undefined)
        this.deltaY = deltaY;

    this.clear = function() {
        this.ctx.clearRect(0, 0, this.size[0], this.size[1]);
    };
    this.draw = function() {
        var ctx = this.ctx;
        var nx = this.size[0] / this.deltaX;
        var ny = this.size[1] / this.deltaY;
        var dx = this.deltaX;
        var dy = this.deltaY;

        for (var i = 0; i < nx; i++) {
            ctx.beginPath();
            ctx.moveTo(i * dx, 0);
            ctx.lineTo(i * dx, this.size[1]);
            ctx.stroke();
        }
        for (var i = 0; i < ny; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * dy);
            ctx.lineTo(this.size[0], i * dy);
            ctx.stroke();
        }
    };
    this.insert = function(at, color) {
        var x = at[0] * this.deltaX;
        var y = at[1] * this.deltaY;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, this.deltaX, this.deltaY);
    };
}
