import secureLocalStorage from "react-secure-storage";

export const TokenService = {
  sessionInfo: "",
  getToken() {
    return secureLocalStorage.getItem("ts::tk");
  },
  setToken(sessionInfo) {
    if (typeof window !== "undefined") {
    secureLocalStorage.setItem("ts::tk", JSON.stringify(sessionInfo));
    }
  },
  deleteToken(){
    secureLocalStorage.removeItem("ts::tk");
  },
  hasToken() {
    if (typeof window !== "undefined") {
      const token = secureLocalStorage.getItem("ts::tk");
      return !!token;
    }
    return false;
  },
   getAccessToken() {
    const sessionInfo = this.getToken();
    return sessionInfo ? JSON.parse(sessionInfo).token : null;
  },
  getRefreshToken() {
    const sessionInfo = this.getToken();
    return sessionInfo ? JSON.parse(sessionInfo).refreshToken : null;
  },
  getTokenExpiry() {
    const sessionInfo = this.getToken();
    return sessionInfo ? JSON.parse(sessionInfo).tokenExpiry : null;
  },
  isTokenExpired() {
    const expiry = this.getTokenExpiry();
    return expiry ? new Date() > new Date(expiry) : true;
  },

  getUser() {
    return JSON.parse(secureLocalStorage.getItem("ts::user"));
  },
  setUser(value) {
    secureLocalStorage.setItem("ts::user", JSON.stringify(value));
  },
  deleteUser(){
    secureLocalStorage.removeItem("ts::user");
  },
  hasUser() {
    if (typeof window !== "undefined") {
      const user = secureLocalStorage.getItem("ts::user");
      return !!user;
    }
    return false;
  },
};
