import { useState } from 'react';
import {
  checkeWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from './constants';
import History from './components/History/History';
import Board from './components/Board/Board';
import S from './Game.module.css';
import './styles/main.css';

function Game() {
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);

  const [gameIndex, setGameIndex] = useState(0);

  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }

    const nextGameIndex = gameIndex + 1;
    setGameIndex(nextGameIndex);

    const nextSquares = currentSquares.map((square, idx) => {
      return idx === index ? nextPlayer : square;
    });
    const nextGameHistory = [
      ...gameHistory.slice(0, nextGameIndex),
      nextSquares,
    ];

    setGameHistory(nextGameHistory);
  };

  const handleTimeTravel = (index) => {
    // 되돌리고 싶은 시간의 기억으로 게임 인덱스를 업데이트 요청
    setGameIndex(index);
  };

  const currentSquares = gameHistory[gameIndex];
  const winnerInfo = checkeWinner(currentSquares);
  const isPlayerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0;
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;
  const isDraw = !winnerInfo && currentSquares.every(Boolean);

  return (
    <div className={S.component}>
      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />
      <History
        onTimeTravel={handleTimeTravel}
        gameHistory={gameHistory}
        gameIndex={gameIndex}
      />
    </div>
  );
}

export default Game;
