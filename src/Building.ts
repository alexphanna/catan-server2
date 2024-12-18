import Vertex from "./Vertex";

class Building extends Vertex {
    private resource: Resource
    constructor(x: number, y: number, resource: Resource) {
        super(x, y);
        this.resource = resource;
    }
}

const tile = new Building(0, 0, "Brick");

console.log(tile)