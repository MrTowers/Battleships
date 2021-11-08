/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { Component } from "../objects/Component.js";
export class Tilemap extends Component {
    constructor(image = new Image()) {
        super();
        this.image = image;
        this.sizeX = 20;
        this.sizeY = 20;
        this.display = 0;
        this.oneTileSize = 16;
    }
    render(ctx) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            ctx.save();
            ctx.drawImage(this.image, this.display * this.oneTileSize, 0, this.oneTileSize, this.oneTileSize, pos.x, pos.y, this.sizeX, this.sizeY);
            ctx.restore();
        }
    }
}
