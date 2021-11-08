import { LUMO_ENGINE2 } from "../../LumoEngine2.js";

export function setPaused (paused = true) {
    LUMO_ENGINE2.paused = paused;
}