/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { GameObject } from "./GameObject.js";

export class Component {
    gameObject!: GameObject;
    tag: string;

    constructor () {
        this.tag = "untagged";
    }

    update (delta = 0) {

    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        
    }

    start () {

    }

    destroy () {
        this.gameObject.components.splice(this.gameObject.components.indexOf(this), 1);
    }
}