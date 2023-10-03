import { useContext } from 'react';

import AppContext, { AppContextModel } from '../context/app.context';

const useApp = (): AppContextModel => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AuthProvider');
  }
  return context;
};

export default useApp;
