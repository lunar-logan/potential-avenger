/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Engine(gameLoop, refreshTime) {
    this.refreshTime = 50; // 50ms by default
    if (refreshTime !== undefined)
        this.refreshTime = refreshTime;

    this.gameLoop = null;
    if (gameLoop !== undefined)
        this.gameLoop = gameLoop;
    
    this.react = function() {
        console.log("MayaFx engine is begining to react");
        if (this.gameLoop !== null) {
            window.setInterval(this.gameLoop, this.refreshTime);
        } else {
            console.log("Cannot react, gameLoop is null");
        }
    };
}