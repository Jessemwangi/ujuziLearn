import { createSlice } from "@reduxjs/toolkit";
import { TokenService } from "../../services/token";

const getInitialSessionInfo = () => {
  try {
    const sessionInfo = TokenService.getToken();
    return sessionInfo ? JSON.parse(sessionInfo) : null;
  } catch {
    return null;
  }
};

const loginSlice = createSlice({
    name: 'authLogin',
    initialState: {
      user: TokenService.getUser(),  
       sessionInfo: getInitialSessionInfo(),  
      loginError:null
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setToken: (state, action) => {
        state.sessionInfo = action.payload;
      },
      setError: (state, action) => {
        state.loginError = action.payload;
      },
      clearUser: (state) => {
        state.user = null;
      },
      clearToken: (state) => {
        state.sessionInfo = null;
      },
      clearError: (state) => {
        state.loginError = null;
      },
    },
  });
  
  export const { setUser, setToken, clearUser, clearToken, setError,clearError } = loginSlice.actions;
  export default loginSlice.reducer;