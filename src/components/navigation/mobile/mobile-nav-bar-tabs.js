import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ closeMenu }) => {
  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={closeMenu}
      />
      <MobileNavBarTab path="/public" label="Public" handleClick={closeMenu} />
      <MobileNavBarTab
        path="/protected"
        label="Protected"
        handleClick={closeMenu}
      />
      <MobileNavBarTab path="/admin" label="Admin" handleClick={closeMenu} />
    </div>
  );
};
