import { Component } from "../../core/objects/Component.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";
export class Shot extends Component {
    constructor(position, hit) {
        super();
        this.position = position;
        this.hit = hit;
        this.tag = "shot";
    }
    render(ctx) {
        if (this.hit) {
            ctx.drawImage(LUMO_ENGINE2.textures["shotHit"], this.position.x, this.position.y, BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots);
        }
        else {
            ctx.drawImage(LUMO_ENGINE2.textures["shotMiss"], this.position.x, this.position.y, BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots);
        }
    }
}
