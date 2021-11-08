/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export class Component {
    constructor() {
        this.tag = "untagged";
    }
    update(delta = 0) {
    }
    render(ctx, canvas) {
    }
    start() {
    }
    destroy() {
        this.gameObject.components.splice(this.gameObject.components.indexOf(this), 1);
    }
}
