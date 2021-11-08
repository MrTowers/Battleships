import { LUMO_ENGINE2 } from "../../LumoEngine2.js";

export function playSound (sound: string) {
    LUMO_ENGINE2.sounds[sound].play();
}