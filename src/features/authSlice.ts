import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { IToken, IUser } from '../models/user';

export interface AuthState {
  user: IUser | null;
  token: IToken | null;
}
const initialState: AuthState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      localStorage.setItem(
        'authTokens',
        JSON.stringify({
          ...action.payload.token,
        }),
      );
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
