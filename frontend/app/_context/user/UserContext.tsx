"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { useCookies } from "@/_hooks/useCookies.ts";
import { UserContextModel } from "@/_interfaces/userContext.model.ts";
export const UserContext = createContext<UserContextModel>(null);

export const useAuth = () => {
  return useContext(UserContext);
};

export function UserContextProvider({ children }) {
  const { getCookie } = useCookies();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setUser(getCookie("user"));
    setIsLoggedIn(getCookie("isUserLoggedIn"));
    setLoading(false);
  }, []);

  const value: UserContextModel = {
    user,
    setUser,
    loading,
    setLoading,
    isLoggedIn,
    setIsLoggedIn,
  };

  // if (loading) return <div> Loading... please wait </div>;

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
