import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackBishop from "../../assets/black-bishop.png"
// @ts-ignore
import whiteBishop from "../../assets/white-bishop.png"

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
      super(color, cell)
      this.logo = color === Colors.white ? whiteBishop : blackBishop
      this.name = FigureName.Bishop
  }

  canMove(cell: Cell): boolean {
      if (!super.canMove(cell))
          return false
      return true
  }
}