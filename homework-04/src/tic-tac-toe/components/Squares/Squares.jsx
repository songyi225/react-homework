import { func } from 'prop-types';
import { WINNERS_COLOR } from '@/tic-tac-toe/constants';
import {
  OneOfPlayerListType,
  WinnerInfoType,
} from '@/tic-tac-toe/types/type.d';
import Square from '../Square/Square';
import S from './Squares.module.css';

Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};

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
