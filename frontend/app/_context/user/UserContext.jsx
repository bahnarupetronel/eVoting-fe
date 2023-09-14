"use client";

import { createContext, useEffect, useState, useContext } from "react";

export const UserContext = createContext({});

export const useAuth = () => {
  return useContext(UserContext);
};

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  // fetch().then((data) => {
  //   setLoading(false);
  //   setUser(data);
  // });
  // }, []);

  const value = {
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
