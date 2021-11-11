import { snapToGrid } from "../../core/functions/snapToGrid.js";
import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Sprite } from "../../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Control } from "./Control.js";
import { Grid } from "./Grid.js";
import { BSSettings } from "./ProjSettings.js";
import { Ship } from "./Ship.js";
import { ShipPart } from "./ShipPart.js";
import { Shot } from "./Shot.js";

type _Phase = "set up" | "wait" | "attack";

export class System extends GameObject {
    player1Grid: Grid;
    playerWebGrid: Grid;
    phase: _Phase;
    shipsToSetUp: number[];
    accShip: Ship;
    control: Control;
    shotSprite!: GameObject;

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
        });

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

        if (this.phase == "attack") {
            let pos = this.control.mousepos;
            this.shotSprite.setPosition(new Vector2(snapToGrid(pos.x, BSSettings.sizeOfShipsAndShots), snapToGrid(pos.y, BSSettings.sizeOfShipsAndShots)));
        }
    }

    placeShip() {
        if (Vector2.between(this.control.mousepos, this.player1Grid.getPosition().add(new Vector2(BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots)), new Vector2(this.player1Grid.sprite.sizeX, this.player1Grid.sprite.sizeY).add(this.player1Grid.getPosition().sub(new Vector2(BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots))))) {
            this.accShip = this.player1Grid.spawnShip(<number>this.shipsToSetUp.pop());
        }
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

        if (this.phase == "attack") {
            if (Vector2.between(this.control.mousepos, this.playerWebGrid.getPosition().add(new Vector2(BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots)), new Vector2(this.player1Grid.sprite.sizeX, this.player1Grid.sprite.sizeY).add(this.player1Grid.getPosition().sub(new Vector2(BSSettings.sizeOfShipsAndShots, BSSettings.sizeOfShipsAndShots))))) {
                this.attack(new Vector2(snapToGrid(this.control.mousepos.x, BSSettings.sizeOfShipsAndShots), snapToGrid(this.control.mousepos.y, BSSettings.sizeOfShipsAndShots)));
            }
        }
    }

    beginShooting () {
        this.phase = "attack";
        let x = new GameObject();
        let s = new Sprite(LUMO_ENGINE2.textures["shotMiss"]);
        s.alpha = 0.5;
        s.sizeX = BSSettings.sizeOfShipsAndShots;
        s.sizeY = BSSettings.sizeOfShipsAndShots;
        x.addComponent(s);
        this.shotSprite = x;
        spawnGameObject(x);
    }

    attack (position: Vector2) {

    }

    underAttack (position: Vector2) {
        for (let i in this.player1Grid.ships) {
            for (let j in this.player1Grid.ships[i].parts) {
                let part = this.player1Grid.ships[i].parts[j];

                if (Vector2.equal(position, part.getPosition())) {
                    //trafienie
                }
                else {
                    //nietrafienie
                }
            }
        }
    }
}