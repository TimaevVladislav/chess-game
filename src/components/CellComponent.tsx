import React, {FC} from "react"
import {Cell} from "../models/Cell"

interface ICellComponentProps {
    cell: Cell
    selected: boolean
    selectCell: (cell: Cell) => void
}

const CellComponent: FC<ICellComponentProps> = ({cell, selected, selectCell}) => {
    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
            onClick={() => selectCell(cell)}
            style={{background: cell.available && cell.figure ? "green" : ""}}
        >
            { cell.available && !cell.figure && <div className={"available"}></div> }
            { cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} /> }
        </div>
    )
}

export default CellComponent