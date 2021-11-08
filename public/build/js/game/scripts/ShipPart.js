import { GameObject } from "../../core/objects/GameObject.js";
import { Tilemap } from "../../core/render/Tilemap.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";
export class ShipPart extends GameObject {
    constructor(ship, partNumber) {
        super();
        this.damaged = false;
        this.ship = ship;
        this.partNumber = partNumber;
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
        this.addComponent(this.tilemap);
    }
    damage() {
        this.damaged = true;
        this.ship.damage();
    }
}