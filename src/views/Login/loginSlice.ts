import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUserState {
  userId: string | null;
  email: string | null;
  username: string | null;
}

let initialState: CurrentUserState = {
  userId: null,
  email: null,
  username: null,
};

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<CurrentUserState>) => {
      const { userId, email, username } = action.payload;
      state.userId = userId;
      state.email = email;
      state.username = username;
    },
    logoutSuccess: (state, action) => {
      state.userId = null;
      state.email = null;
      state.username = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
