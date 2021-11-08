import { Transform } from "../../core/math/Transform.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Sprite } from "../../core/render/Sprite.js";
import { Tilemap } from "../../core/render/Tilemap.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";
import { Ship } from "./Ship.js";

export class ShipPart extends GameObject {
    damaged: boolean;
    ship: Ship;
    partNumber: number;
    tilemap: Tilemap;

    constructor (ship: Ship, partNumber: number) {
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

    damage () {
        this.damaged = true;
        this.ship.damage();
    }
}