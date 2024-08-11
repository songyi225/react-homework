import Square from '../Square/Square';
import { PLAYER } from '@/tic-tac-toe/constants';

function Squares() {
  return (
    <div className="Squares">
      <Square></Square>
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
    </div>
  );
}

export default Squares;
