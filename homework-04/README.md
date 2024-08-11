# 틱택토 게임

금요일 수업을 결석하여 올려주신 커밋 내용을 기반으로 전체 코드를 천천히 따라하는 것으로 시작하였습니다. 각 컴포넌트별로 어떻게 동작하는지를 공부하면서 깨달은 내용을 위주로 기록하였습니다.

## 구현 내용 정리

#### 컴포넌트 분리 및 CSS 모듈화

```
tic-tac-toe
├── Game.jsx
├── Game.module.css
├── components
│   ├── Board
│   │   ├── Board.jsx
│   │   └── Board.module.css
│   ├── History
│   │   ├── History.jsx
│   │   └── History.module.css
│   ├── Square
│   │   ├── Square.jsx
│   │   └── Square.module.css
│   ├── Squares
│   │   ├── Squares.jsx
│   │   └── Squares.module.css
│   └── Status
│       ├── Status.jsx
│       └── Status.module.css
├── constants.js
├── styles
│   └── main.css
└── types
    └── type.d.js
```

#### Square 컴포넌트

- 속성값 `children`, `onPlay`를 받아 화면에 렌더링한다
- `...restProps` : 정의된 속성 외 다른 속성을 받을 때 'restProps' 로 묶어서 처리함

#### Squares 컴포넌트

- Squares 배열 데이터의 초기 상태값을 상수로 정의 (constants.js)

```js
// constants.js
export const PLAYER_COUNT = Object.keys(PLAYER).length;
export const INITIAL_SQUARES = Array(9).fill(null);
```

- map 사용

```js
squares.map((square, index) => { ... }
```

square, index 두 개의 매개변수를 받는 map 함수를 의미함. square는 squares 배열의 요소 하나 하나를 의미하고 index는 그 배열 요소의 위치를 나타냄. 이는 Square 컴포넌트를 렌더링하기 위해 map을 통해 squares 배열을 순회함

#### Status 컴포넌트

- 게임판 위에 상태메시지를 렌더링해줌

#### Board 컴포넌트

- 속성값을 받아 Status 컴포넌트, Squares 컴포넌트를 렌더링

#### History 컴포넌트

- 게임 기록을 리스트로 렌더링하는 컴포넌트

#### Game 컴포넌트

- Squares → Board → Game 컴포넌트로 상태를 끌어올림

- useState 함수를 사용해서 상태를 관리

```js
const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);

const [gameIndex, setGameIndex] = useState(0);
```

</br>

- handlePlayGame 함수 : 특정 위치(index)를 클릭하면 호출되는 함수

```js
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
  const nextGameHistory = [...gameHistory.slice(0, nextGameIndex), nextSquares];

  setGameHistory(nextGameHistory);
};
```

현재 순회중인 idx가 사용자가 클릭한 index와 같은지 비교하고, 같다면 현재 플레이어를 표시하는 것으로 nextPlayer를 반환하고, 같지 않다면 원래의 square 값을 반환

</br>

→ Game 컴포넌트 좀 더 분석해보기... 🥲

## 느낀점

- 커밋 내용을 바탕으로 하나하나 따라서 코드를 작성하는것부터 어려움이 있었습니다.. 확실히 이해하기 어려웠지만 그래도 코드를 따라 작성하면서 어느정도의 작동 흐름은 이해되었습니다.
- 수업을 듣지 못해서.. **상태 끌어올리기**를 이해하기 어려웠는데 여러 컴포넌트들이 공통적으로 사용할 수 있도록 부모 컴포넌트에 상태를 **공유**한다는 느낌인 것 같습니다. 한참을 찾다가 과제 제출 시간이 지나서 ㅠㅠ 일단 제출 후 더 학습해볼 예정입니다..!
- 웬만하면 수업 빼먹지 말자...를 느꼈습니다..😭😭😭
