/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 
 * @param {String} id canvas id
 * @param {String} ctxType Type of context like 2d, 3d
 * @returns {canvas context or null}
 */
function initCanvas(id, ctxType) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        return canvas.getContext(ctxType);

    }
    return null;
}

