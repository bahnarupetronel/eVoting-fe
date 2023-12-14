"use client";

import { useEffect, useState } from "react";
import axios from "../../_api/axios.ts";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useRouter } from "next/navigation";
import { useAuth } from "../../_context/user/UserContext";
import { useCookies } from "../../_hooks/useCookies.ts";

export const logout = async (controller: AbortController): Promise<any> => {
  const response = await axios.post("/api/user/signout", {
    signal: controller.signal,
  });
  return response.data;
};

const LogoutUser = () => {
  const { removeCookie } = useCookies();
  const { setUser, setIsLoggedIn } = useAuth();
  const [isLogoutSuccessfull, setIsLogoutSuccessfull] = useState(false);
  const [counter, setCounter] = useState(5);
  const router = useRouter();
  useEffect(() => {
    const controller: AbortController = new AbortController();
    let timeout: ReturnType<typeof setTimeout> = null;
    const logoutUser = async () => {
      try {
        const response = await logout(controller);
        removeCookie("isUserLoggedIn");
        removeCookie("user");

        setIsLoggedIn(false);
        setIsLogoutSuccessfull(true);
        setUser(null);
        timeout = setTimeout(() => {
          router.push("/login");
        }, 5000);

        NotificationManager.success(
          "Your logout was successful.",
          "Successfully logged out. ",
          5000
        );
      } catch (err) {
        NotificationManager.error(
          "We're sorry, but your logout was unsuccessful.Try again in a few seconds.",
          "Log out failed",
          5000
        );
      }
    };

    logoutUser();
    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, isLogoutSuccessfull]);
  return (
    <div>
      {isLogoutSuccessfull ? (
        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          You are being redirected to the login page. You were succesfullly
          logged out. Redirect in <span>{counter}</span>.
        </p>
      ) : (
        <p>Logout failed. Refresh the page in a few seconds and try again</p>
      )}
    </div>
  );
};
export default LogoutUser;
