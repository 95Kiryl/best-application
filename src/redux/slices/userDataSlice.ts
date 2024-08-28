import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const userDataSlice = createSlice({
  name: 'userObj',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    removeUser: () => {
      return [];
    },
  },
});

export const { addUser, removeUser } = userDataSlice.actions;

export default userDataSlice.reducer;
