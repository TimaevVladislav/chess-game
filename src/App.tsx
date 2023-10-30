import React, {useEffect, useState} from "react"

import BoardComponent from "./components/BoardComponent"
import LostFigures from "./components/LostFigures"
import {Board} from "./models/Board"
import {Player} from "./models/Player"
import {Colors} from "./models/enums/Colors"
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState<Board>(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.white))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.black))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
      restartBoard()
      setCurrentPlayer(whitePlayer)
  }, [])

  const restartBoard = () => {
      const board = new Board()
      board.initCells()
      board.addFigures()
      setBoard(board)
  }

  const changePlayer = () => {
      setCurrentPlayer(currentPlayer?.color === Colors.white ? blackPlayer : whitePlayer)
  }

  return (
      <div className="app">
          <Timer
              currentPlayer={currentPlayer}
              restart={restartBoard}
          />

          <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              changePlayer={changePlayer}
          />

          <>
              <LostFigures
                  title="Черные фигуры"
                  figures={board.lostBlackFigures}
              />

              <LostFigures
                  title="Белые фигуры"
                  figures={board.lostWhiteFigures}
              />
          </>
      </div>
  )
}

export default App
