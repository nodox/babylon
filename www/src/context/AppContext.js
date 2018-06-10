import React from "react";

export const AppContext = React.createContext({
  isSignedIn: undefined,
  customer: undefined,
  merchant: undefined,
  login: () => {},
  logout: () => {},
});
