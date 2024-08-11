import { arrayOf, func, number } from 'prop-types';
import { OneOfPlayerListType } from '@/tic-tac-toe/types/type.d';
import S from './History.module.css';

History.propTypes = {
  gameIndex: number.isRequired,
  gameHistory: arrayOf(OneOfPlayerListType),
  onTimeTravel: func,
};

function History({ gameIndex, gameHistory = [], onTimeTravel }) {
  const handleClick = (index) => () => onTimeTravel(index);
  return (
    <div className={S.component}>
      <ol>
        {gameHistory.map((history, index) => {
          const buttonLabel = index === 0 ? '게임 시작' : `게임 #${index}`;
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={handleClick(index)}
                disabled={isDisabled}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default History;
