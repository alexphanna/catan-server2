type Resource = "Brick" | "Grain" | "Lumber" | "Ore" | "Wool"

type Building = "Settlement" | "City" | "Road"

class Player {
    name: string;
    resources: Record<Resource, number>
    buildings: Record<Building, number>
    constructor(name: string) {
        this.name = name;
        this.resources = {
            "Brick": 0,
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

console.log(player.resources["Bricks"])