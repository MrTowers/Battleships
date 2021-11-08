import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Grid } from "./Grid.js";
import { BSSettings } from "./ProjSettings.js";
export class System extends GameObject {
    constructor() {
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
