import React, {FC} from "react"
import {Cell} from "../models/Cell"

interface ICellComponentProps {
    cell: Cell
}

const CellComponent: FC<ICellComponentProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
        </div>
    )
}

export default CellComponent