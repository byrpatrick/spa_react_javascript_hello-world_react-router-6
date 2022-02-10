import React from "react";

export const MenuButton = ({ handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className="mobile-nav-bar__toggle material-icons"
    >
      menu
    </span>
  );
};
