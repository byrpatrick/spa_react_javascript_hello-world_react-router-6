import React from "react";

export const MenuButton = ({ handleClick }) => {
  return (
    <span
      id="mobile-nav-bar-menu-button"
      onClick={handleClick}
      className="mobile-nav-bar__toggle material-icons"
    >
      menu
    </span>
  );
};
