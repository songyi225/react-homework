import S from './Squares.module.css';
import Square from '../Square/Square';
import { useState } from 'react';
import { PLAYER, PLAYER_COUNT, INITIAL_SQUARES } from '@/tic-tac-toe/constants';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const playGame = (index) => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, squareIndex) => {
        if (squareIndex === index) {
          return currentPlayer;
        }
        return square;
      });
      return nextSquares;
    });
  };

  const gameIndex = squares.filter(Boolean).length;

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;

  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={() => playGame(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
