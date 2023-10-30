import React, {FC, useEffect, useState} from "react"
import {Board} from "../models/Board"
import CellComponent from "./CellComponent"
import {Cell} from "../models/Cell"
import {Player} from "../models/Player"

interface IBoardComponentProps {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    changePlayer: () => void
}

const BoardComponent: FC<IBoardComponentProps> = ({board, setBoard, currentPlayer, changePlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const selectCell = (cell: Cell): void => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
           selectedCell.moveFigure(cell)
           changePlayer()
           setSelectedCell(null)
           updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    useEffect(() => {
        highlightAvailableCells()
    }, [selectedCell])

    const highlightAvailableCells = (): void => {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = (): void => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    { row.map((cell, index) =>
                        <CellComponent
                            selectCell={selectCell}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent