import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../context/user/service/user-service.js";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!UserService.isUserLoggedIn()) {
      navigate("/login");
    }
  }, []);

  return UserService.isUserLoggedIn() ? children : "";
}
