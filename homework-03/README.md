# 컴포넌트 속성 검사 및 테스트

### 컴포넌트 대상

바닐라 프로젝트로 진행했던 '타잉'의 헤더를 컴포넌트로 구성하였습니다. -> [피그마 시안](https://www.figma.com/design/vKuVdmSBAO9uQJ63h6CdUk/%ED%83%80%EC%9E%89-%ED%97%A4%EB%8D%94-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=0-1&t=ozIrqZ4MZ4px2uea-1)

---

### 수행 과정

#### 1. MenuDisplay 컴포넌트에 속성값을 할당합니다.

MenuComponent.jsx

```js
function MenuDisplay({ menu }) {
  return (
    <div className="logo-menu">
      <HeaderLogo />
      <div className="menu">
        {menu.map(({ id, text = "", srcImg = "" }) => (
          <a key={id} className="menuContainer" href="/">
            {srcImg && <img className="iconImg" src={srcImg} alt="" />}
            {text && <span className="menuText">{text}</span>}
          </a>
        ))}
      </div>
    </div>
  );
}
```

#### 2. menu 속성의 data 값은 아래와 같습니다.

data.js

```js
export const menu = [
  { id: "1", text: "실시간", srcImg: "/menu-live.svg" },
  { id: "2", text: "TV프로그램" },
  { id: "3", text: "영화" },
  { id: "4", srcImg: "/menu-paramount.svg" },
];
```

#### 3. @types 폴더 안에 속성 타입 검사 파일을 생성합니다.

menu.d.js

```js
import { exact, string } from "prop-types";

export const MenuType = exact({
  id: string.isRequired,
  text: string,
  srcImg: string,
});
```

#### 4. MenuDisplay 컴포넌트의 속성값을 검사하기 위해 MenuType을 불러옵니다.

MenuComponent.jsx

```js
import { arrayOf } from "prop-types";
import { MenuType } from "@/@types/menu.d.js";

MenuDisplay.propTypes = {
  menu: arrayOf(MenuType).isRequired,
};
```

---

### 느낀점

- 지난번 과제를 건강이슈로 수행하지 못해서 이후 진행해봤는데 컴포넌트를 쪼개는 것부터 감이 잡히질 않아 조금 어려웠습니다. 피그마로 디자인을 하면서 Logo, Menu, Aside 컴포넌트를 각각 만들었고, 이 컴포넌트들을 가져와 Header.jsx에 넣어 Header를 만들고, 이 Header를 main.jsx에 불러와서 렌더링 해주는 흐름으로 만들어보았는데 이런 흐름으로 진행해보니 어느정도 감이 잡혀오는 것 같습니다. 하지만 좀 더 복잡한 구조를 만들게된다면 어떻게 될 지 모르겠네요.... ㅠ\_ㅠ
- 강의 시간에 학습했던 파일을 보면서 속성 검사 파일을 작성해보았는데 대략적인 흐름만 이해하고 정확히 어떤식으로 속성을 검사하는지.. 아직 완벽히 이해하지는 못했습니다. 좀 더 공부가 필요해보이고 남은 시간동안 열심히 복습해보려고 합니다..ㅠㅠ
- 속성 검사는 타입스크립트로도 작성해보고 싶은데 아직 prop-types를 사용하는 것도 어렵습니다.. 여러모로 공부가 더 필요하다는걸 깨달았던 시간이었습니다.. :cry:
