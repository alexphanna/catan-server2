import { Resource } from "./Game";

export default class Player {
    name: string;
    resources: Record<Resource, number>
    buildings: Record<"Settlement" | "City" | "Road", number>
    constructor(name: string) {
        this.name = name;
        this.resources = {
            "Brick": 15,
            "Grain": 0,
            "Lumber": 0,
            "Ore": 0,
            "Wool": 0
        }
        this.buildings = {
            "Settlement": 5,
            "City": 4,
            "Road": 15
        }
    }
}

const player = new Player("alex")

console.log(player.resources["Brick"])