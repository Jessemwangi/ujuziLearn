import secureLocalStorage from "react-secure-storage";

export const TokenService = {
  token: "",
  getToken() {
    return secureLocalStorage.getItem("ts::tk");
  },
  setToken(value) {
    if (typeof window !== "undefined") {
    secureLocalStorage.setItem("ts::tk", value);
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
