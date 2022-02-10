import React from "react";

export const CloseButton = ({ handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className="mobile-nav-bar__toggle material-icons"
    >
      close
    </span>
  );
};
