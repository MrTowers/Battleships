import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Component } from "../../core/objects/Component.js";
import { ShipPart } from "./ShipPart.js";
export class Ship extends Component {
    constructor(size = 2) {
        super();
        this.parts = [];
        this.health = size;
        this.init();
    }
    damage() {
        this.health--;
    }
    checkHealth() {
        if (this.health <= 0) {
            this.onDestroy();
        }
    }
    init() {
        for (let i = 0; i < this.health; i++) {
            this.parts.push(new ShipPart(this, i));
            spawnGameObject(this.parts[i]);
        }
    }
    onDestroy() {
    }
}
