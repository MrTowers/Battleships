/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { Component } from "../objects/Component.js";
export class Sprite extends Component {
    constructor(image = new Image()) {
        super();
        this.image = image;
        this.sizeX = 20;
        this.sizeY = 20;
    }
    render(ctx) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            ctx.drawImage(this.image, pos.x, pos.y, this.sizeX, this.sizeY);
        }
    }
}
