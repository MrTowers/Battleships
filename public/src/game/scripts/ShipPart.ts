import { Component } from "../../core/objects/Component.js";
import { Ship } from "./Ship.js";

export class ShipPart extends Component {
    damaged: boolean;
    ship: Ship;

    constructor (ship: Ship) {
        super();
        this.damaged = false;
        this.ship = ship;
    }

    damage () {
        this.damaged = true;
    }
}