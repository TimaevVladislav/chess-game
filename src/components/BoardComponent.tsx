import React, {FC} from "react"
import {Board} from "../models/Board"
import CellComponent from "./CellComponent";

interface IBoardComponentProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardComponentProps> = ({board, setBoard}) => {
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    { row.map((cell, index) => <CellComponent cell={cell} key={cell.id} />) }
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent