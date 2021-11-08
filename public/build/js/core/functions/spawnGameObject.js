import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
export function spawnGameObject(gameObject) {
    LUMO_ENGINE2.objects.push(gameObject);
    gameObject.start();
}
