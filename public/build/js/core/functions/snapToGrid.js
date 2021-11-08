export function snapToGrid(input = 0, gridSize = 16) {
    return input - (input % gridSize);
}
