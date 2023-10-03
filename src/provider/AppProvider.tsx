import { ReactNode, useReducer } from 'react';

import AppContext, { AppContextModel } from '../context/app.context';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const value: AppContextModel = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
