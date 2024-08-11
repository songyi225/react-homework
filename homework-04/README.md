# 틱택토 게임

### 커밋 과정

#### 1. 초기 환경 설정

#### 2. 플레이어를 상수로 설정

- constants.js

#### 3. Game.jsx 마크업을 기반으로 컴포넌트 분리

- Board
- History
- Square
- Squares
- Status

#### 4. Square 컴포넌트

Square.jsx

- 스타일 모듈화 (Square.module.css)
- Square 컴포넌트의 속성값을 정의
  - 속성값 `children`, `onPlay`를 받아 화면에 렌더링
  - `...restProps` : Square 컴포넌트에서 속성값으로 정의된 children, onPlay 외에 다른 속성을 받을 때 'restProps' 로 묶어서 처리함
- 속성 검사 propTypes 활용

#### 5. Squares 컴포넌트

Squares.jsx

- 스타일 모듈화 (Squares.module.css)
  </br>
- Squares 배열 데이터의 초기 상태값을 상수로 정의 (constants.js)

```js
// constants.js
export const PLAYER_COUNT = Object.keys(PLAYER).length;
export const INITIAL_SQUARES = Array(9).fill(null);
```

</br>

- useState 함수를 사용해서 상태를 관리 -> `setSquares` 함수 : 상태 업데이트에 사용

```js
const [squares, setSquares] = useState(INITIAL_SQUARES);
```

</br>

- playGame 함수 : 클릭된 위치 (index)에 상태를 저장

```js
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
```
