export default class Vertex {
    readonly row: number;
    readonly column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    public equals(vertex: Vertex): boolean {
        return this.row == vertex.row && this.column == vertex.column;
    }

    public adjacent(vertex: Vertex): boolean {
        if (this.column % 2 == 0 && vertex.equals(new Vertex(this.row + 1, this.column + 1))) {
            return true;
        }
        else if (vertex.equals(new Vertex(this.row - 1, this.column - 1))) {
            return true;
        }
        for (let i = -1; i <= 1; i += 2) {
            if (vertex.equals(new Vertex(this.row, this.column + i))) {
                return true;
            }
        }
        return false;
    }
}