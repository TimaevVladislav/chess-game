import React, {useEffect, useState} from "react"

import BoardComponent from "./components/BoardComponent"
import {Board} from "./models/Board"

function App() {
  const [board, setBoard] = useState<Board>(new Board())

  useEffect(() => {
      restartBoard()
  }, [])

  const restartBoard = () => {
      const board = new Board()
      board.initCells()
      setBoard(board)
  }

  return (
      <div className="app">
          <BoardComponent board={board} setBoard={setBoard} />
      </div>
  )
}

export default App
