import Board from "./Board";
import Player from "./Player";

export type Resource = "Brick" | "Grain" | "Lumber" | "Ore" | "Wool"

export default class Game {
    private board: Board;
    private players: Player[];

    constructor() {
        let board = new Board(5);
        let players = [];
    }

    public addPlayer(player: Player) {
        this.players.push(player);
    }

    public start() {
        
    }
}