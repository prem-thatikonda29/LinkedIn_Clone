import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: localStorage.getItem("user") || null, // Include a user object in the initial state
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      state.users.push(newUser);
      state.user = newUser;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      if (state.user && state.user.id === action.payload.id) {
        state.user = action.payload;
      }
    },
  },
});

export const { login, logout, register, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
