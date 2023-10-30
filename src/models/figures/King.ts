import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackKing from "../../assets/black-king.png"
// @ts-ignore
import whiteKing from "../../assets/white-king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.white ? whiteKing : blackKing
        this.name = FigureName.Bishop
    }
}