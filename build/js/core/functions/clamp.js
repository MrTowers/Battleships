export function clamp(input = 0, min = 0, max = 0) {
    return Math.min(Math.max(input, min), max);
}
