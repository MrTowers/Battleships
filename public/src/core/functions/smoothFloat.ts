export function smoothFloat (input = 0, target = 0, speed = 0.1) {
    return input + (target - input) * speed;
}