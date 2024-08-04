import { arrayOf } from "prop-types";
import { MenuType } from "@/@types/menu.d.js";
import HeaderLogo from "./LogoComponent";

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

MenuDisplay.propTypes = {
  menu: arrayOf(MenuType).isRequired,
};

export default MenuDisplay;
