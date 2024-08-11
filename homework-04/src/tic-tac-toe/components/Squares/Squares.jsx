import { WINNERS_COLOR, PLAYER_LIST } from '@/tic-tac-toe/constants';
import S from './Squares.module.css';
import Square from '../Square/Square';
import { arrayOf, func, number, oneOf, shape } from 'prop-types';

const OneOfPlayerType = oneOf(PLAYER_LIST);
const OneOfPlayerListType = arrayOf(OneOfPlayerType);
const WinnerInfoType = shape({
  winner: OneOfPlayerType,
  condition: arrayOf(number),
});

Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Squares({ squares, winnerInfo, onPlay }) {
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
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
