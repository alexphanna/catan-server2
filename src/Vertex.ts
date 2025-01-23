export default class Vertex {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    adjacentTiles() {
        return [];
    }
}

/*
Vertex coordinates:

 2,0╮  ╭2,1
    ╱▔▔╲
1,0╯╲▁▁╱╰1,1
 0,0╯  ╰0,1

*/