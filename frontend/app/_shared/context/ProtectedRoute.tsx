"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!UserService.isUserLoggedIn()) {
  //     navigate("/login");
  //   }
  // }, []);

  // return UserService.isUserLoggedIn() ? children : "";
  return children;
}
