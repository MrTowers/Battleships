import { snapToGrid } from "../../core/functions/snapToGrid.js";
import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Sprite } from "../../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { BSSettings } from "./ProjSettings.js";
import { Ship } from "./Ship.js";
import { ShipPart } from "./ShipPart.js";
import { Shot } from "./Shot.js";

export class Grid extends GameObject {
    visible: boolean;
    shots: Shot[];
    shipParts: ShipPart[];
    ships: Ship[];
    sprite: Sprite;
    usable: boolean;

    constructor (visible: boolean) {
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

    shot (position: Vector2) {

    }

    initParts () {

    }

    spawnShip (size: number) : Ship {
        let s = new Ship(size);
        this.ships.push(s);
        s.init();
        this.moveShip(s, new Vector2());
        return s;
    }

    moveShip (ship: Ship, position: Vector2) {
        if (ship.direction == "horizontal") {
            for (let i = 0; i < ship.parts.length; i++) {
                ship.parts[i].setPosition(new Vector2(snapToGrid(position.x + (i * BSSettings.sizeOfShipsAndShots), BSSettings.sizeOfShipsAndShots), snapToGrid(position.y, BSSettings.sizeOfShipsAndShots)));
            }
        }
        if (ship.direction == "vertical") {
            for (let i = 0; i < ship.parts.length; i++) {
                ship.parts[i].setPosition(new Vector2(snapToGrid(position.x, BSSettings.sizeOfShipsAndShots), snapToGrid(position.y + (i * BSSettings.sizeOfShipsAndShots), BSSettings.sizeOfShipsAndShots)));
            }
        }
    }
}