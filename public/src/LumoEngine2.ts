/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { Engine } from "./core/render/Engine.js";
import { main } from "./game/Main.js";


export const LUMO_ENGINE2 = new Engine();

let lastTime = 0;
let now = performance.now();
let delta = 0;

function tick () {
    now = performance.now();
    delta = now - lastTime;
    lastTime = now;
    LUMO_ENGINE2.update(delta);
    LUMO_ENGINE2.render();
    requestAnimationFrame(tick);
}

tick();
main();