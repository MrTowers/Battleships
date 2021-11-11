import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
import { BSSettings } from "./scripts/ProjSettings.js";
import { System } from "./scripts/System.js";
export function main() {
    //dodajemy tlo
    //wczytywanie tekstur
    Load.texture("./textures/envoirment/sea.jpg", "seaBG");
    Load.texture("./textures/ships/1partship.png", "ship1");
    Load.texture("./textures/ships/2partship.png", "ship2");
    Load.texture("./textures/ships/3partship.png", "ship3");
    Load.texture("./textures/ships/4partship.png", "ship4");
    Load.texture("./textures/ships/destroyedPart.png", "destroyed");
    Load.texture("./textures/envoirment/shotHit.png", "shotHit");
    Load.texture("./textures/envoirment/shotMiss.png", "shotMiss");
    Load.texture("./textures/envoirment/grid.png", "grid");
    //wczytywanie dzwieków
    if (BSSettings.funnySounds) {
        Load.sound("./audio/zabawne/bgmusic.mp3", "music");
        Load.sound("./audio/zabawne/boom.mp3", "boom");
        Load.sound("./audio/zabawne/hit.mp3", "hit");
        Load.sound("./audio/zabawne/lose.mp3", "lose");
        Load.sound("./audio/zabawne/miss.mp3", "miss");
        Load.sound("./audio/zabawne/shot.mp3", "shot");
        Load.sound("./audio/zabawne/win.mp3", "win");
    }
    else {
        Load.sound("./audio/realistyczne/miss.mp3", "miss");
    }
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
