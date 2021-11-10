import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Control } from "./Control.js";
import { Grid } from "./Grid.js";
import { BSSettings } from "./ProjSettings.js";
import { Ship } from "./Ship.js";
import { ShipPart } from "./ShipPart.js";

type _Phase = "set up" | "wait" | "attack";

export class System extends GameObject {
    player1Grid: Grid;
    playerWebGrid: Grid;
    phase: _Phase;
    shipsToSetUp: number[];
    accShip: Ship;
    control: Control;

    constructor() {
        super();
        this.player1Grid = new Grid(true);
        this.player1Grid.usable = true;
        this.playerWebGrid = new Grid(false);
        this.player1Grid.setPosition(new Vector2(100, 100));
        this.playerWebGrid.setPosition(new Vector2((12 * BSSettings.sizeOfShipsAndShots) + 100, 100));
        spawnGameObject(this.player1Grid);
        spawnGameObject(this.playerWebGrid);
        this.phase = "set up";
        this.control = new Control();

        document.addEventListener("mousedown", (e) => {
            this.click();
        });

        document.addEventListener("keydown", (e) => {
            if (this.phase == "set up") {
                if (e.key == "r") {
                    this.accShip.rotate();
                }
            }
        })

        this.shipsToSetUp = [
            4,
            3,
            3,
            2,
            2,
            2,
            1,
            1,
            1,
            1
        ];

        this.accShip = this.player1Grid.spawnShip(<number>this.shipsToSetUp.pop());
    }

    update() {
        if (this.phase == "set up") {
            this.player1Grid.moveShip(this.accShip, this.control.mousepos);
        }
    }

    placeShip() {
        this.accShip = this.player1Grid.spawnShip(<number>this.shipsToSetUp.pop());
    }

    click() {
        if (this.phase == "set up") {
            if (this.shipsToSetUp.length <= 0) {
                this.phase = "wait";
            }
            else {
                this.placeShip();
            }
        }
    }
}