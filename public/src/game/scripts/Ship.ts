import { Component } from "../../core/objects/Component.js";
import { ShipPart } from "./ShipPart.js";

export class Ship extends Component {
    parts: ShipPart[];
    health: number;

    constructor (size = 2) {
        super();
        this.parts = [];
        this.health = size;
    }

    damage () {
        this.health--;
    } 
}