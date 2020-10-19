import React, { createContext, useContext } from 'react';

import { useFavorites } from './use-favorites';

export function ContextProvider({ children }) {
  const favorites = useFavorites();
  return <context.Provider value={{ favorites }}>{children}</context.Provider>;
}

const context = createContext();

export default () => useContext(context);
