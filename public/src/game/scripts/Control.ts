import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";

export class Control extends Component {
    mousepos: Vector2;
    onclick: any;

    constructor () {
        super();
        this.mousepos = new Vector2();

        document.body.addEventListener("mousemove", (e) => {
            this.mousepos.x = e.x;
            this.mousepos.y = e.y;
        });

        /*document.body.addEventListener("mousedown", (e) => {
            this.onclick();
        });*/
    }
}