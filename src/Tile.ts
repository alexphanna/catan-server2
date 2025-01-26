import Vertex from "./Vertex";
import { Resource } from "./Game";

export default class Tile {
    readonly row: number;
    readonly column: number;
    private terrain: string;
    private number: Number;
    private resource?: Resource;

    constructor(row: number, column: number, terrain: string, number?: Number) {
        this.row = row;
        this.column = column;
        this.terrain = terrain;

        const terrainToResource: Record<string, Resource> = {
            "Hill"     : "Brick",
            "Forest"   : "Lumber",
            "Mountain" : "Ore",
            "Field"    : "Grain",
            "Pasture"  : "Wool"
        };

        if (terrain in terrainToResource) {
            this.number = number;
            this.resource = terrainToResource[terrain];
        }
    }

    getVertices(): Vertex[] {
        var vertices = [];
        for (var j = this.column; j <= this.column + 2; j++) {
            vertices.push(new Vertex(this.row, j))
            vertices.push(new Vertex(this.row + 1, j + 1))
        }
        return vertices;
    }
}