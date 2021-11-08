/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { Color } from "../math/Color.js";
import { Component } from "../objects/Component.js";

export class Box extends Component {
    sizeX: number;
    sizeY: number;
    color: Color;

    constructor (sizeX = 0, sizeY = 0, color = new Color()) {
        super();
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
        this.tag = "box";
    }

    render (ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.fillStyle = this.color.toString();
        ctx.fillRect(this.gameObject.getPosition().x, this.gameObject.getPosition().y, this.sizeX, this.sizeY);
        ctx.restore();
    }
}