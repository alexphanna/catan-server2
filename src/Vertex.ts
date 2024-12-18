export default class Vertex {
    readonly x: number
    readonly y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    adjacentTiles() {
        return [];
    }
}