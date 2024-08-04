import { exact, string } from "prop-types";

export const MenuType = exact({
  id: string.isRequired,
  text: string,
  srcImg: string,
});
