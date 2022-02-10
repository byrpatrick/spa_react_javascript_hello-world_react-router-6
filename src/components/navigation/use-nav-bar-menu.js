import { useState } from "react";

export const MenuStates = {
  OPEN: "open",
  CLOSED: "closed",
};

export const useNavBarMenu = () => {
  const [menuStatus, setMenuStatus] = useState(MenuStates.CLOSED);

  const openMenu = () => {
    document.body.classList.add("scroll-lock");
    setMenuStatus(MenuStates.OPEN);
  };

  const closeMenu = () => {
    document.body.classList.remove("scroll-lock");
    setMenuStatus(MenuStates.CLOSED);
  };

  return {
    openMenu,
    closeMenu,
    menuStatus,
  };
};
