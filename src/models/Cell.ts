import {Figure} from "./figures/Figure"
import {Board} from "./Board"
import {Colors} from "./enums/Colors"

export class Cell {
    readonly x: number
    readonly y: number
    readonly color: Colors
    figure: Figure | null
    board: Board
    available: boolean
    id: number

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.available = false
        this.id = Math.random()
    }

    isEmpty(): boolean {
        return this.figure === null
    }

    isEnemy(cell: Cell): boolean {
       if (cell.figure) {
           return this.figure?.color !== cell.figure?.color
       }

       return false
    }

    isEmptyVertical(cell: Cell): boolean {
      if (this.x !== cell.x) {
          return false
      }

      const min = Math.min(this.y, cell.y)
      const max = Math.max(this.y, cell.y)

      for (let i = min + 1; i < max; i++) {
          if (!this.board.getCell(this.x, i).isEmpty()) {
              return false
          }
      }

      return true
    }

    isEmptyHorizontal(cell: Cell): boolean {
        if (this.y !== cell.y) {
            return false
        }

        const min = Math.min(this.x, cell.x)
        const max = Math.max(this.x, cell.x)

        for (let x: number = min + 1; x < max; x++) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEmptyDiagonal(cell: Cell): boolean {
        const absX = Math.abs(cell.x - this.x);
        const absY = Math.abs(cell.y - this.y);
        if(absY !== absX)
            return false;

        const dy = this.y < cell.y ? 1 : -1
        const dx = this.x < cell.x ? 1 : -1

        for (let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty())
                return false;
        }
        return true;
   }

   setFigure(figure: Figure) {
        this.figure = figure
        this.figure.cell = this
   }

    addLostFigure(figure: Figure) {
       figure.color === Colors.black ? this.board.lostBlackFigures.push(figure) : this.board.lostWhiteFigures.push(figure)
    }

    moveFigure(cell: Cell) {
        if (this.figure && this.figure?.canMove(cell)) {
            this.figure?.move(cell)
            if (cell.figure) {
                this.addLostFigure(cell.figure)
            }

            cell.setFigure(this.figure)
            this.figure = null
        }
    }
}