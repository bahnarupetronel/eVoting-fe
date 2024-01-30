"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useSendEmailToken } from "@/_hooks/user";
import { useRouter, useSearchParams } from "next/navigation";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

const ValidateEmail = () => {
  const isFirstRender = useRef(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const mutation = useSendEmailToken();
  const [isSucces, setIsSucces] = useState(false);

  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      mutation.mutate(token, {
        onSuccess: () => {
          NotificationManager.success(
            "Adresa de email a fost verificata cu succes.",
            "Adresa de email a fost verificata. ",
            3000
          );
          setIsSucces(true);
        },
        onError: () => {
          NotificationManager.error(
            "Ceva nu a functionat corect. Incercati din nou !",
            "Eroare",
            3000
          );
        },
      });
    }
    isFirstRender.current = false;
  }, []);

  return (
    <div className={globalStyles["container"]}>
      {" "}
      <section className={styles["section-logout"]}>
        {isSucces ? (
          <div>
            <h2>Adresa de email a fost confirmata.</h2>
            <p>Multumim!</p>
            <Button
              variant="outlined"
              onClick={handleClick}
            >
              Vezi acasa
            </Button>
          </div>
        ) : (
          <div>
            <p>Confirmarea adresei de email a esuat.</p>
          </div>
        )}
      </section>
    </div>
  );
};
export default ValidateEmail;
