import { Vector2 } from "./Vector2.js";
export class Field {
    constructor(x = 0, y = 0, sizeX = 0, sizeY = 0) {
        this.beginVector = new Vector2(x, y);
        this.endVector = new Vector2(sizeX, sizeY);
    }
    isOverlapping(v) {
        if (v.x >= this.beginVector.x && v.x <= this.endVector.x) {
            if (v.y >= this.beginVector.y && v.y <= this.endVector.y) {
                return true;
            }
        }
        return false;
    }
}
