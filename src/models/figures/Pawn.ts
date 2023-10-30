import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackPawn from "../../assets/black-pawn.png"
// @ts-ignore
import whitePawn from "../../assets/white-pawn.png"

export class Pawn extends Figure {

    isFirstMove: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.white ? whitePawn : blackPawn
        this.name = FigureName.Pawn
    }

    canMove(cell: Cell): boolean {
        if(!super.canMove(cell))
            return false;
        const direction = this.cell.figure?.color === Colors.black ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Colors.black ? 2 : -2

        if ((cell.y === this.cell.y + direction || this.isFirstMove
                && (cell.y === this.cell.y + firstStepDirection))
            && cell.x === this.cell.x
            && this.cell.board.getCell(cell.x, cell.y).isEmpty()) {
            return true;
        }

        if(cell.y === this.cell.y + direction
            && (cell.x === this.cell.x + 1 || cell.x === this.cell.x - 1)
            && this.cell.isEnemy(cell)) {
            return true;
        }

        return false;
    }

    move(cell: Cell) {
        super.move(cell);
        this.isFirstMove = false;
    }
}