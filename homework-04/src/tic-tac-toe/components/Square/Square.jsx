import { node } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  const isDisabled = !!children;
  return (
    <button className={S.component} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
