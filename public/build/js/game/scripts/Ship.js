import { spawnGameObject } from "../../core/functions/spawnGameObject.js";
import { Component } from "../../core/objects/Component.js";
import { ShipPart } from "./ShipPart.js";
export class Ship extends Component {
    constructor(size = 2) {
        super();
        this.parts = [];
        this.health = size;
        this.direction = "horizontal";
        //this.init();
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
            this.parts[i].setDirection(this.direction);
            spawnGameObject(this.parts[i]);
        }
    }
    onDestroy() {
    }
    rotate() {
        if (this.direction == "horizontal") {
            this.direction = "vertical";
        }
        else {
            this.direction = "horizontal";
        }
        for (let i in this.parts) {
            this.parts[i].setDirection(this.direction);
        }
    }
}
