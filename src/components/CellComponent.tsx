import React, {FC} from "react"
import {Cell} from "../models/Cell"

interface ICellComponentProps {
    cell: Cell
}

const CellComponent: FC<ICellComponentProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>

        </div>
    )
}

export default CellComponent