import { createSlice } from "@reduxjs/toolkit";
import { TokenService } from "../../services/token";

const loginSlice = createSlice({
    name: 'authLogin',
    initialState: {
      user: TokenService.getUser(),  // Get user from secure storage
      token: TokenService.getToken(),  // Get token from secure storage
      loginError:null
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setToken: (state, action) => {
        state.token = action.payload;
      },
      setError: (state, action) => {
        state.loginError = action.payload;
      },
      clearUser: (state) => {
        state.user = null;
      },
      clearToken: (state) => {
        state.token = null;
      },
      clearError: (state) => {
        state.loginError = null;
      },
    },
  });
  
  export const { setUser, setToken, clearUser, clearToken, setError,clearError } = loginSlice.actions;
  export default loginSlice.reducer;