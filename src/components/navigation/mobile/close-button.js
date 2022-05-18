import React from "react";

export const CloseButton = ({ handleClick }) => {
  return (
    <span
      id="mobile-nav-bar-close-button"
      onClick={handleClick}
      className="mobile-nav-bar__toggle material-icons"
    >
      close
    </span>
  );
};
