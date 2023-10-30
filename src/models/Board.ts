import {Cell} from "./Cell"
import {Colors} from "./enums/Colors"
import {Queen} from "./figures/Queen"
import {King} from "./figures/King"
import {Bishop} from "./figures/Bishop"
import {Knight} from "./figures/Knight"
import {Rook} from "./figures/Rook"
import {Pawn} from "./figures/Pawn"
import {Figure} from "./figures/Figure"

export class Board {
    cells: Cell[][] = []
    lostBlackFigures: Figure[] = []
    lostWhiteFigures: Figure[] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
               if ((i + j) % 2 === 0) {
                   row.push(new Cell(this, i, j, Colors.black, null))
               } else {
                   row.push(new Cell(this, i, j, Colors.white, null))
               }
            }

            this.cells.push(row)
        }
    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]

            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    public getCopyBoard(): Board {
        const board = new Board()
        board.cells = this.cells
        board.lostWhiteFigures = this.lostWhiteFigures
        board.lostBlackFigures = this.lostBlackFigures
        return board
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.black, this.getCell(i, 1))
            new Pawn(Colors.white, this.getCell(i, 6))
        }
    }

    private addKings() {
        new King(Colors.black, this.getCell(4, 0))
        new King(Colors.white, this.getCell(4, 7))
    }

    private addQueens() {
        new Queen(Colors.black, this.getCell(3, 0))
        new Queen(Colors.white, this.getCell(3, 7))
    }

    private addBishops() {
        new Bishop(Colors.black, this.getCell(2, 0))
        new Bishop(Colors.black, this.getCell(5, 0))
        new Bishop(Colors.white, this.getCell(2, 7))
        new Bishop(Colors.white, this.getCell(5, 7))
    }

    private addKnights() {
        new Knight(Colors.black, this.getCell(1, 0))
        new Knight(Colors.black, this.getCell(6, 0))
        new Knight(Colors.white, this.getCell(1, 7))
        new Knight(Colors.white, this.getCell(6, 7))
    }

    private addRooks() {
        new Rook(Colors.black, this.getCell(0, 0))
        new Rook(Colors.black, this.getCell(7, 0))
        new Rook(Colors.white, this.getCell(0, 7))
        new Rook(Colors.white, this.getCell(7, 7))
    }

    public addFigures() {
        this.addPawns()
        this.addKings()
        this.addQueens()
        this.addBishops()
        this.addKnights()
        this.addRooks()
    }

    public getCell(x: number, y: number) {
       return this.cells[x][y]
    }
}