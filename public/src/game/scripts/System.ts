import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Grid } from "./Grid.js";
import { BSSettings } from "./ProjSettings.js";
import { ShipPart } from "./ShipPart.js";

type _Phase = "set up" | "wait" | "attack";

export class System extends GameObject {
    player1Grid: Grid;
    playerWebGrid: Grid;
    phase: _Phase;

    constructor () {
        super();
        this.player1Grid = new Grid(true);
        this.playerWebGrid = new Grid(false);
        this.player1Grid.setPosition(new Vector2(100, 100));
        this.playerWebGrid.setPosition(new Vector2((12 * BSSettings.sizeOfShipsAndShots) + 100, 100));
        spawnGameObject(this.player1Grid);
        spawnGameObject(this.playerWebGrid);
        this.phase = "set up";
    }
}