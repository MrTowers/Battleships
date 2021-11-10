/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Transform } from "../math/Transform.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "./Component.js";

export class GameObject {
    transform: Transform;
    components: Component[];

    constructor (transform = new Transform()) {
        this.components = [];
        this.transform = transform;
    }

    addComponent (component: Component) : void {
        component.gameObject = this;
        this.components.push(component);
    }

    removeComponentById (id: number) : void {
        this.components.splice(id, 1);
    }

    getComponentById (id: number) : Component {
        return this.components[id];
    }

    getComponentByTag (tag: string) : Component {
        for (let i in this.components) {
            if (this.components[i].tag == tag) {
                return this.components[i];
            }
        }
        console.error(`Component ${tag} cannot be found`);
        
        return new Component();
    }

    getPosition () {
        return this.transform.position;
    }

    setPosition (location = new Vector2()) {
        this.transform.position = location;
    }

    getRotation () : number {
        return this.transform.rotation;
    }

    setRotation (rotation: number) {
        this.transform.rotation = rotation;
    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        for (let i in this.components) {
            this.components[i].render(ctx, canvas);
        }
    }

    update (delta = 0) {
        for (let i in this.components) {
            this.components[i].update(delta);
        }
    }

    destroy () {
        LUMO_ENGINE2.objects.splice(LUMO_ENGINE2.objects.indexOf(this), 1);
    }

    start () {
        for (let i in this.components) {
            this.components[i].start();
        }
    }
}