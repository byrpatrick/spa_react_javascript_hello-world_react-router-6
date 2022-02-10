import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ closeMenu }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={closeMenu}
      />
      <MobileNavBarTab path="/public" label="Public" handleClick={closeMenu} />
      {isAuthenticated && (
        <>
          <MobileNavBarTab
            path="/protected"
            label="Protected"
            handleClick={closeMenu}
          />
          <MobileNavBarTab
            path="/admin"
            label="Admin"
            handleClick={closeMenu}
          />
        </>
      )}
    </div>
  );
};
