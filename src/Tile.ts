export default class Tile {
    private terrain: string;
    private number: Number;
    private resource?: Resource;

    constructor(terrain: string, number?: Number) {
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
}