import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
};

const initialState: User = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      return { ...state, name: action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
