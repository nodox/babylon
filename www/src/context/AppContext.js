import React from 'react';

export const AppContext = React.createContext({
  isSignedIn: undefined,
  user: undefined,
});
