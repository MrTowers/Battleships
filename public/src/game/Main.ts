import { snapToGrid } from "../core/functions/snapToGrid.js";
import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
import { System } from "./scripts/System.js";

export function main () {
    //dodajemy tlo

    Load.texture("./textures/envoirment/sea.jpg", "seaBG");
    Load.texture("./textures/ships/1partship.png", "ship1");
    Load.texture("./textures/ships/2partship.png", "ship2");
    Load.texture("./textures/ships/3partship.png", "ship3");
    Load.texture("./textures/ships/4partship.png", "ship4");

    Load.texture("./textures/envoirment/shotHit.png", "shotHit");
    Load.texture("./textures/envoirment/shotMiss.png", "shotMiss");

    Load.texture("./textures/envoirment/grid.png", "grid");

    const bg = new GameObject();
    const bgSprite = new Sprite(LUMO_ENGINE2.textures["seaBG"]);
    bgSprite.sizeX = window.innerWidth;
    bgSprite.sizeY = window.innerHeight;
    bg.addComponent(bgSprite);
    spawnGameObject(bg);

    //glowny obiekt gry
    const BattleShips = new System();
    spawnGameObject(BattleShips);
    
}