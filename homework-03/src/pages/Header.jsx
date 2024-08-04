import MenuDisplay from "@/components/MenuComponent";

import AsideDisplay from "@/components/AsideComponent";
import * as headerData from "@/data/data.js";

function Header() {
  const { menu } = headerData;

  return (
    <div className="header">
      <MenuDisplay menu={menu} />
      <AsideDisplay />
    </div>
  );
}

export default Header;
