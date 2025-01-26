import Vertex from "./Vertex";

export default class Building extends Vertex {
    private color: string
    private isCity: boolean
    constructor(x: number, y: number, color: string) {
        super(x, y);
        this.color = color;
        this.isCity = false;
    }
}