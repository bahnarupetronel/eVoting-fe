"use client";

import { useEffect, useState } from "react";
import Home from "./_components/home/Home";
import "./_stylesheets/App.css";
// import { ProtectedRoute } from "./shared/context/ProtectedRoute";

import { useAuth } from "./_context/user/UserContext.jsx";

function App() {
  const { user, setUser, loading, setLoading, isLoggedIn, setIsLoggedIn } =
    useAuth();
  const [accesToken, setAccesToken] = useState(() => {
    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null;
    return token;
  });

  useEffect(() => {
    console.log("App reload");
    const isUserLoggedIn =
      typeof window !== "undefined"
        ? window.localStorage.getItem("isUserLoggedIn")
        : null;
    if (isUserLoggedIn) {
      const newUser = {
        ...user,
        token: window?.localStorage.getItem("token"),
      };
      setUser(newUser);
      setIsLoggedIn(true);
    } else {
      setUser({});
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="app-container">
      <Home />
    </div>
  );
}

export default App;
