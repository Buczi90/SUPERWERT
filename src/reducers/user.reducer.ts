import { Reducer } from 'react';
import { UserModel, UserAction } from '../models';

export const userInitialState: UserModel = {
  id: null,
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  roles: [],
};

const userReducer: Reducer<UserModel, UserAction> = (state, action) => {
  switch (action.type) {
    case 'SET':
      const { user } = action;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    case 'CLEAR':
      localStorage.clear();
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
