import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { GameObject } from "../objects/GameObject.js";

export function spawnGameObject (gameObject: GameObject) {
    LUMO_ENGINE2.objects.push(gameObject);
    gameObject.start();
}