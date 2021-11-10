/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { Component } from "../../core/objects/Component.js";
import { BSSettings } from "./ProjSettings.js";

export type _Direction = "horizontal" | "vertical";


export class Tilemap extends Component {
    image: HTMLImageElement;
    display: number;
    sizeX: number;
    sizeY: number;
    oneTileSize: number;
    direction: _Direction;

    constructor(image = new Image()) {
        super();
        this.image = image;
        this.sizeX = 20;
        this.sizeY = 20;
        this.display = 0;
        this.oneTileSize = 16;
        this.direction = "horizontal";
    }

    render(ctx: CanvasRenderingContext2D) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            ctx.save();
            if (this.direction === "horizontal") {
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
            if (this.direction === "vertical") {
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(
                    this.image,
                    this.display * this.oneTileSize,
                    0,
                    this.oneTileSize,
                    this.oneTileSize,
                    pos.y,
                    -pos.x - BSSettings.sizeOfShipsAndShots,
                    this.sizeX,
                    this.sizeY
                );
            }
            ctx.restore();
        }
    }

    start() {
        this.gameObject.setRotation(0.5);
    }
}