"use client";

import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useAuth } from "@/_context/user/UserContext";
import { useCookies } from "@/_hooks/useCookies.ts";
import { useLogoutUser } from "@/_hooks/auth";
import styles from "@/_shared/stylesheets/auth.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const LogoutUser = () => {
  const mutation = useLogoutUser();
  const { removeCookie } = useCookies();
  const { setUser, setIsLoggedIn } = useAuth();
  const [isLogoutSuccessfull, setIsLogoutSuccessfull] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  useEffect(() => {
    mutation.mutate(null, {
      onSuccess: () => {
        removeCookie("isUserLoggedIn");
        removeCookie("user");

        setIsLoggedIn(false);
        setUser(null);
        setIsLogoutSuccessfull(true);
        NotificationManager.success("", "Deconectarea a avut succes.", 3000);
      },
      onError: () => {
        NotificationManager.error(
          "A aparut eroare. Incercati din nou mai tarziu!",
          "Deconectarea a esuat.",
          3000
        );
      },
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["img-container"]}>
        <Image
          src="/assets/vote.jpg"
          alt="vote-image"
          fill
          priority
          sizes="100%"
        />
      </div>
      <section className={styles["section-logout"]}>
        {isLogoutSuccessfull ? (
          <div>
            <h2>Deconectarea a avut succes.</h2>
            <p>Multumim pentru ca ati folosit eVoting.</p>
            <Button
              variant="outlined"
              onClick={handleClick}
            >
              Conectare din nou
            </Button>
          </div>
        ) : (
          <div>
            <p>
              Deconectarea a esuat. A aparut eroare.Incercati din nou mai
              tarziu.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
export default LogoutUser;
