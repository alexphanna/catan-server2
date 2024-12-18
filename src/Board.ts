import Vertex from "./Vertex";

class Board {
    constructor(width: number) {
        const height = (width - 3) * 2 + 1;
        var resourceMap: Resource[][] = [];
        for (let i = 0; i < height; i++) {
            resourceMap.push([]);
            for (let j = 0; j < width - Math.abs(i - (width - 3)); j++) {
                resourceMap[i].push("Brick");
            }
        }
        console.log(resourceMap);
    }
}

const board = new Board(5);

// Required Operations:
//  - Find longest road
//  - Add a road (edge) between 2 vertices
//  - Add a building (vertex)