import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'authLogin',
    initialState: {
      user: null,
      token: null,
      lognError:null
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setToken: (state, action) => {
        state.token = action.payload;
      },
      setError: (state, action) => {
        state.lognError = action.payload;
      },
      clearUser: (state) => {
        state.user = null;
      },
      clearToken: (state) => {
        state.token = null;
      },
      clearError: (state) => {
        state.lognError = null;
      },
    },
  });
  
  export const { setUser, setToken, clearUser, clearToken, setError,clearError } = loginSlice.actions;
  export default loginSlice.reducer;