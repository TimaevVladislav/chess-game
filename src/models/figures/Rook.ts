import {Figure, FigureName} from "./Figure"
import {Colors} from "../enums/Colors"
import {Cell} from "../Cell"

// @ts-ignore
import blackRook from "../../assets/black-rook.png"
// @ts-ignore
import whiteRook from "../../assets/white-rook.png"
export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.white ? whiteRook : blackRook
        this.name = FigureName.Bishop
    }
}