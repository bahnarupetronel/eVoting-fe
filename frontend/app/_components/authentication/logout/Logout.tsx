"use client";

import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useAuth } from "@/_context/user/UserContext";
import { useCookies } from "@/_hooks/useCookies.ts";
import { useLogoutUser } from "@/_hooks/auth";
import styles from "@/_shared/stylesheets/auth.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const LogoutUser = () => {
  const mutation = useLogoutUser();
  const { removeCookie } = useCookies();
  const { setUser, setIsLoggedIn } = useAuth();
  const [isLogoutSuccessfull, setIsLogoutSuccessfull] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  useEffect(() => {
    mutation.mutate(null, {
      onSuccess: () => {
        setIsLoading(false);
        removeCookie("isUserLoggedIn");
        removeCookie("user");
        removeCookie("role");

        setIsLoggedIn(false);
        setUser(null);
        setIsLogoutSuccessfull(true);
        NotificationManager.success("", "Deconectarea a avut succes.", 3000);
      },
      onError: () => {
        setIsLoading(false);
        NotificationManager.error(
          "A aparut eroare. Incercati din nou mai tarziu!",
          "Deconectarea a esuat.",
          3000
        );
      },
    });
  }, []);
  if (isLoading)
    return (
      <div className={globalStyles["container"]}>
        <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
        <section className={globalStyles["section-modal"]}>
          <HourglassBottomIcon className={globalStyles["icon-loading"]} />
          <h3 className={styles["title"]}> Loading</h3>
        </section>
      </div>
    );
  return (
    <div className={globalStyles["container"]}>
      <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
      {isLogoutSuccessfull ? (
        <section className={globalStyles["section-modal"]}>
          <DoneIcon className={globalStyles["icon-success"]} />
          <h3 className={styles["title"]}>
            {" "}
            Deconectarea s-a realizat cu succes.
          </h3>
          <div>
            <p>Multumim ca ati folosit eVoting.</p>
            <Button
              variant="outlined"
              onClick={handleClick}
            >
              Conectare din nou
            </Button>
          </div>
        </section>
      ) : (
        <section className={globalStyles["section-modal"]}>
          <ErrorIcon className={globalStyles["icon-error"]} />
          <h3 className={styles["title"]}> Deconectarea nu a avut succes.</h3>
          <p>A aparut eroare.Incercati din nou mai tarziu.</p>
        </section>
      )}
    </div>
  );
};

export default LogoutUser;
