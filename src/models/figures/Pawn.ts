import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackPawn from "../../assets/black-pawn.png"
// @ts-ignore
import whitePawn from "../../assets/white-pawn.png"

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.white ? whitePawn : blackPawn
        this.name = FigureName.Pawn
    }

    canMove(cell: Cell): boolean {
        if (!super.canMove(cell))
            return false
        return true
    }
}