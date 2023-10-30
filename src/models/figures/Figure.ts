import {Colors} from "../enums/Colors"
// @ts-ignore
import logo from "../../assets/black-king.png"
import {Cell} from "../Cell"

export enum FigureName {
   Figure = "Figure",
   King = "King",
   Knight = "Knight",
   Pawn = "Pawn",
   Queen = "Queen",
   Rook = "Rook",
   Bishop = "Bishop"
}

export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: FigureName
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureName.Figure
        this.id = Math.random()
    }

    canMove(cell: Cell): boolean {
        return true
    }

    move(target: Cell): void {

    }
}