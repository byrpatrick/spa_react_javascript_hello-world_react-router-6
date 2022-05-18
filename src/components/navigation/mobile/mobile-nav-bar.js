import React from "react";
import { CloseButton } from "./close-button";
import { MenuButton } from "./menu-button";
import { MobileNavBarBrand } from "./mobile-nav-bar-brand";
import { MobileNavBarButtons } from "./mobile-nav-bar-buttons";
import { MobileNavBarTabs } from "./mobile-nav-bar-tabs";

const MenuState = {
  CLOSED: "closed",
  OPEN: "open",
};

export const MobileNavBar = () => {
  const [menuState, setMenuState] = React.useState(MenuState.CLOSED);

  const closeMenu = () => {
    document.body.classList.remove("scroll-lock");
    setMenuState(MenuState.CLOSED);
  };
  const openMenu = () => {
    document.body.classList.add("scroll-lock");
    setMenuState(MenuState.OPEN);
  };

  return (
    <div className="mobile-nav-bar__container">
      <nav className="mobile-nav-bar">
        <MobileNavBarBrand handleClick={closeMenu} />
        {menuState === MenuState.CLOSED && (
          <MenuButton handleClick={openMenu} />
        )}
        {menuState === MenuState.OPEN && (
          <CloseButton handleClick={closeMenu} />
        )}

        {menuState === MenuState.OPEN && (
          <div className="mobile-nav-bar__menu">
            <MobileNavBarTabs closeMenu={closeMenu} />
            <MobileNavBarButtons />
          </div>
        )}
      </nav>
    </div>
  );
};
