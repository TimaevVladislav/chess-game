import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackQueen from "../../assets/black-queen.png"
// @ts-ignore
import whiteQueen from "../../assets/white-queen.png"

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.white ? whiteQueen : blackQueen
        this.name = FigureName.Queen
    }

    canMove(cell: Cell): boolean {
        if (!super.canMove(cell))
            return false

        if (this.cell.isEmptyVertical(cell)) {
            return true
        }

        if (this.cell.isEmptyHorizontal(cell)) {
            return true
        }

        if (this.cell.isEmptyDiagonal(cell)) {
            return true
        }

        return false
    }
}