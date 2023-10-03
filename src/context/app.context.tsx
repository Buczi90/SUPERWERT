import { createContext } from 'react';

import { userInitialState } from '../reducers/user.reducer';

export interface AppContextModel {}

const AppContext = createContext<AppContextModel>({
  userContext: { user: userInitialState, login: () => {}, logout: () => {} },
});

export default AppContext;
