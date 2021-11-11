import { GameObject } from "../../core/objects/GameObject.js";
import { Sprite } from "../../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";
import { Tilemap } from "./Tilemap.js";
export class ShipPart extends GameObject {
    constructor(ship, partNumber) {
        super();
        this.damaged = false;
        this.ship = ship;
        this.partNumber = partNumber;
        this.direction = "horizontal";
        switch (ship.health) {
            case 1: {
                this.tilemap = new Tilemap(LUMO_ENGINE2.textures["ship1"]);
                break;
            }
            case 2: {
                this.tilemap = new Tilemap(LUMO_ENGINE2.textures["ship2"]);
                break;
            }
            case 3: {
                this.tilemap = new Tilemap(LUMO_ENGINE2.textures["ship3"]);
                break;
            }
            case 4: {
                this.tilemap = new Tilemap(LUMO_ENGINE2.textures["ship4"]);
                break;
            }
            default: {
                this.tilemap = new Tilemap(LUMO_ENGINE2.textures["shotHit"]);
            }
        }
        this.tilemap.sizeX = BSSettings.sizeOfShipsAndShots;
        this.tilemap.sizeY = BSSettings.sizeOfShipsAndShots;
        this.tilemap.display = partNumber;
        this.tilemap.direction = this.direction;
        this.addComponent(this.tilemap);
    }
    damage() {
        this.damaged = true;
        this.ship.damage();
        this.tilemap.destroy();
        let s = new Sprite(LUMO_ENGINE2.textures["destroyed"]);
        s.sizeX = BSSettings.sizeOfShipsAndShots;
        s.sizeY = BSSettings.sizeOfShipsAndShots;
        this.addComponent(s);
    }
    setDirection(direction) {
        this.direction = direction;
        this.tilemap.direction = direction;
    }
}
