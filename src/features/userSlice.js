import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [], 
    user: null, // Include a user object in the initial state
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      const newUser = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        image: action.payload.image,
        headline: action.payload.headline,
        education: action.payload.education,
        city: action.payload.city,
        state: action.payload.state,
        country: action.payload.country,
        bannerImage: action.payload.bannerImage,
        about: action.payload.about,
      };
      state.users.push(newUser);
      state.user = newUser; 
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
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
