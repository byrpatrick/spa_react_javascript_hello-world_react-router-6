import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: window.location.pathname,
      },
    });
  };

  return (
    <button className="button__sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
