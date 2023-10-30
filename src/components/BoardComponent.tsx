import React, {FC, useState} from "react"
import {Board} from "../models/Board"
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface IBoardComponentProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardComponentProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const selectCell = (cell: Cell): void => {
        cell.figure ? setSelectedCell(cell) : setSelectedCell(null)
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