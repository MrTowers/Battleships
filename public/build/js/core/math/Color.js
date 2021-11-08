/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export class Color {
    constructor(r = 0, g = 0, b = 0, a = 1) {
        if (r > 1)
            this.r = r / 255;
        else
            this.r = r;
        if (g > 1)
            this.g = g / 255;
        else
            this.g = g;
        if (b > 1)
            this.b = b / 255;
        else
            this.b = b;
        if (a > 1)
            this.a = a / 255;
        else
            this.a = a;
    }
    add(color) {
        return new Color(this.r + color.r, this.g + color.g, this.b + color.b, this.a + color.a);
    }
    sub(color) {
        return new Color(this.r - color.r, this.g - color.g, this.b - color.b, this.a - color.a);
    }
    mul(color) {
        return new Color(this.r * color.r, this.g * color.g, this.b * color.b, this.a * color.a);
    }
    div(color) {
        return new Color(this.r / color.r, this.g / color.g, this.b / color.b, this.a / color.a);
    }
    toString() {
        return `rgba(${this.r * 255}, ${this.g * 255}, ${this.b * 255}, ${this.a})`;
    }
}
