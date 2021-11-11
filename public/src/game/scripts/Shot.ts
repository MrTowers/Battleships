import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";

export class Shot extends Component {
    position: Vector2;
    hit: boolean;

    constructor (position: Vector2, hit: boolean) {
        super();
        this.position = position;
        this.hit = hit;
        this.tag = "shot";
    }

    render (ctx: CanvasRenderingContext2D) {
        if (this.hit) {
            ctx.drawImage(LUMO_ENGINE2.textures["shotHit"], this.position.x, this.position.y, BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots);
        }
        else {
            ctx.drawImage(LUMO_ENGINE2.textures["shotMiss"], this.position.x, this.position.y, BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots);
        }
    }
}