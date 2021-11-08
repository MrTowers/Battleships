/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { Component } from "../objects/Component.js";

export class Tilemap extends Component {
    image: HTMLImageElement;
    display: number;
    sizeX: number;
    sizeY: number;
    oneTileSize: number;

    constructor (image = new Image()) {
        super();
        this.image = image;
        this.sizeX = 20;
        this.sizeY = 20;
        this.display = 0;
        this.oneTileSize = 16;
    }

    render (ctx: CanvasRenderingContext2D) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            ctx.drawImage(
                this.image,
                this.display * this.oneTileSize,
                0,
                this.oneTileSize,
                this.oneTileSize,
                pos.x,
                pos.y,
                this.sizeX,
                this.sizeY
            );
        }
    }
}