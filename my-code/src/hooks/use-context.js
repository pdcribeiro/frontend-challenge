import React, { createContext } from 'react';

import { useFavorites } from './use-favorites';

export default function ContextProvider({ children }) {
  const favorites = useFavorites();
  return <context.Provider value={{ favorites }}>{children}</context.Provider>;
}

export const context = createContext();
