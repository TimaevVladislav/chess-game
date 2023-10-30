import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackKnight from "../../assets/black-knight.png"
// @ts-ignore
import whiteKnight from "../../assets/white-knight.png"

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.white ? whiteKnight : blackKnight
        this.name = FigureName.Knight
    }

    canMove(cell: Cell): boolean {
        if (!super.canMove(cell))
            return false

        const dx = Math.abs(this.cell.x - cell.x);
        const dy = Math.abs(this.cell.y - cell.y);

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}