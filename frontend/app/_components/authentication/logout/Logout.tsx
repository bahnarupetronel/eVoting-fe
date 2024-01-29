"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import axios from "@/_api/axios.ts";
import { useAuth } from "@/_context/user/UserContext";
import { useCookies } from "@/_hooks/useCookies.ts";
import { useLogoutUser } from "@/_hooks/auth";

const LogoutUser = () => {
  const mutation = useLogoutUser();
  const { removeCookie } = useCookies();
  const { setUser, setIsLoggedIn } = useAuth();
  const [isLogoutSuccessfull, setIsLogoutSuccessfull] = useState(false);
  const [counter, setCounter] = useState(3);
  const router = useRouter();

  if (counter === 0) router.push("/login");

  useEffect(() => {
    mutation.mutate(null, {
      onSuccess: (response) => {
        removeCookie("isUserLoggedIn");
        removeCookie("user");

        setIsLoggedIn(false);
        setIsLogoutSuccessfull(true);
        setUser(null);
        NotificationManager.success(
          "Your logout was successful.",
          "Successfully logged out. ",
          3000
        );
      },
      onError: () => {
        NotificationManager.error(
          "We're sorry, but your logout was unsuccessful.Try again in a few seconds.",
          "Log out failed",
          3000
        );
      },
    });
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
