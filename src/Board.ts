import Tile from "./Tile";
import Vertex from "./Vertex";
import Building from "./Building";

export default class Board {
    private width: number;
    private height: number;
    private map: Tile[][];

    private numbersDistr: number[];
    private terrainsDistr: string[];

    public vertices: Map<Vertex, Vertex[]>; // make private

    constructor(width: number) {
        if (width != 5 && width != 6) {
            throw new Error("Width must be 5 or 6");
        }
        this.width = width;
        this.height = (width - 3) * 2 + 1;
        this.map = [];
        this.vertices = new Map<Vertex, Vertex[]>;
        this.distribute();
        this.generate();
    }

    public vertexExists(vertex: Vertex) {
        for (let v of this.vertices.keys()) {
            if (v.equals(vertex)) {
                return true;
            }
        }
        return false;
    }

    public vertexInBounds(vertex: Vertex) {
        return 0 <= vertex.row && vertex.row <= this.height && 0 <= vertex.column && vertex.column <= this.map[vertex.row].length * 2;
    }

    public addBuilding(building: Building) { // addVertex
        if (!this.vertexInBounds(building)) {
            throw new Error("Building out of bounds");
        }
        for (let vertex of this.vertices.keys()) {
            if (vertex.equals(new Vertex(building.row, building.column))) {
                throw new Error("Building already exists");
            }
        }
        this.vertices.set(building, []);
    }

    public addRoad(start: Vertex, end: Vertex, color: string) { // addEdge
        if (!this.vertexInBounds(end)) {
            throw new Error("Road out of bounds");
        }
        let legal: boolean = false;
        for (let vertex of this.vertices.keys()) {
            if (vertex.equals(start) && vertex.adjacent(end)) {
                this.vertices.get(vertex).push(end);
                legal = true;
            }
            else if (vertex.equals(end) && vertex.adjacent(start)) {
                this.vertices.get(vertex).push(start);
                legal = true;
            }
        }
        if (legal && !this.vertexExists(end)) {
            this.vertices.set(end, [start]);
        }
    }

    private distribute() {
        const terrainCounts: Record<string, number> = { // very ugly, change later
            "Hill"     : (this.width == 5 ? 3 : 5),
            "Forest"   : (this.width == 5 ? 4 : 6),
            "Mountain" : (this.width == 5 ? 3 : 5),
            "Field"    : (this.width == 5 ? 4 : 6),
            "Pasture"  : (this.width == 5 ? 4 : 6),
            "Desert"   : (this.width == 5 ? 1 : 2)
        }
        const terrains = Object.keys(terrainCounts);

        this.numbersDistr = [];
        this.terrainsDistr = terrains.flatMap(terrain => Array(terrainCounts[terrain]).fill(terrain));
        for (var i = 2; i <= 12; i++) { // could condense with a ternary expression
            if (i == 2 || i == 7 || i == 12) {
                for (var j = 0; j < this.width - 4; j++) {
                    this.numbersDistr.push(i);
                }
            } else {
                for (var j = 0; j < this.width - 3; j++) {
                    this.numbersDistr.push(i);
                }
            }
        }
        shuffle(this.terrainsDistr);
        shuffle(this.numbersDistr);

        // TODO: ensure that the numbers end up in legal postions (no adj reds)
    }

    private nextTile(row: number, column: number): Tile {
        const nextTerrain = this.terrainsDistr.pop();
        if (nextTerrain != "Desert") {
            var nextNumber = this.numbersDistr.pop();
            return new Tile(row, column, nextTerrain, nextNumber);
        }
        return new Tile(row, column, nextTerrain);
    }

    private generate() {
        this.distribute(); // must be done before generation

        for (let i = 0; i < this.height; i++) {
            this.map.push([]);
        }
        for (let i = 3; i <= this.width; i++) {
            for (let j = 0; j < i; j++) {
                this.map[i - 3].push(this.nextTile(i - 3, j));
                if (i != this.width) {
                    this.map[this.height + (3 - i) - 1].push(this.nextTile(this.height + (3 - i) - 1, j));
                }
            }
        }
    }
}

function shuffle(numbers: any[]) { // https://stackoverflow.com/a/12646864
    for (let i = numbers.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
}