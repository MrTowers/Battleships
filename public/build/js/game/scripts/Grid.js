import { Vector2 } from "../../core/math/Vector2.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Sprite } from "../../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";
import { Ship } from "./Ship.js";
export class Grid extends GameObject {
    constructor(visible) {
        super();
        this.visible = visible;
        this.shots = [];
        this.shipParts = [];
        this.ships = [];
        this.sprite = new Sprite(LUMO_ENGINE2.textures["grid"]);
        this.sprite.sizeX = 12 * BSSettings.sizeOfShipsAndShots;
        this.sprite.sizeY = 12 * BSSettings.sizeOfShipsAndShots;
        this.addComponent(this.sprite);
        this.usable = false;
    }
    shot(position) {
    }
    initParts() {
    }
    spawnShip(size) {
        let s = new Ship(size);
        this.ships.push(s);
        s.init();
        this.moveShip(s, new Vector2());
    }
    moveShip(ship, position) {
        for (let i = 0; i < ship.parts.length; i++) {
            ship.parts[i].setPosition(new Vector2(position.x + (i * BSSettings.sizeOfShipsAndShots), position.y));
        }
    }
}
