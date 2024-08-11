import { func, node } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Square({ children, onPlay, ...restProps }) {
  // [파생된 상태]
  const isDisabled = !!children;

  return (
    <button
      className={S.component}
      onClick={onPlay}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Square;
