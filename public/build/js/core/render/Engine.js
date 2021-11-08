/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export class Engine {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);
        this.canvas.style.backgroundColor = "black";
        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        this.objects = [];
        this.textures = {};
        this.sounds = {};
        this.paused = false;
    }
    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i in this.objects) {
            this.objects[i].render(this.ctx, this.canvas);
        }
    }
    update(delta = 0) {
        if (!this.paused) {
            for (let i in this.objects) {
                this.objects[i].update(delta);
            }
        }
    }
}
