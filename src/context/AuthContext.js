import axios from "axios";
import { createContext, useEffect, useState } from "react";
import makeReq from "../MakeReq";
import { API_BASEURL_USERS } from "./constants";

export const AuthContext = createContext();

console.log("in Auth Component");

export const AuthProvider = ({ children }) => {
  console.log("in AuthProvider");

  const tokenLocal = window.localStorage.getItem("token");

  const [token, setToken] = useState(tokenLocal);
  const [user, setUser] = useState();

  console.log("token", token, "user", user);
  useEffect(() => {
    getMe();
    console.log("use effect of context");
  }, []);

  const getMe = () => {
    if (token) {

      const res = makeReq(token);
      console.log(res);
    } else {
      alert("Please Login First");
    }
  };
  const login = (tk, uData) => {
    window.localStorage.setItem("token", JSON.stringify(tk));
    setToken(tk);
    setUser(uData);
  };
  const logout = () => {
    window.localStorage.removeItem("token");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
