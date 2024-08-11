import S from './Squares.module.css';
import Square from '../Square/Square';
import { useState } from 'react';
import {
  PLAYER,
  PLAYER_COUNT,
  INITIAL_SQUARES,
  WINNERS_COLOR,
  checkeWinner,
} from '@/tic-tac-toe/constants';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlayGame = (index) => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      });
      return nextSquares;
    });
  };

  const winnerInfo = checkeWinner(squares);

  const gameIndex = squares.filter(Boolean).length;

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;

  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: '#0A0061',
        };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square
            key={index}
            style={winnerStyles}
            onPlay={handlePlayGame(index)}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
