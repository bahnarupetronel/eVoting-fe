"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useSendEmailToken } from "@/_hooks/user";
import { useRouter, useSearchParams } from "next/navigation";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from "@mui/icons-material/Done";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const ValidateEmail = () => {
  const isFirstRender = useRef(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const mutation = useSendEmailToken();
  const [isSucces, setIsSucces] = useState(false);
  const [isError, setIsError] = useState(false);

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
          setIsError(true);
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
      {isSucces && (
        <section className={globalStyles["section-modal"]}>
          <DoneIcon className={globalStyles["icon-success"]} />
          <h2>Adresa de email a fost confirmata.</h2>
          <p>Multumim!</p>
          <Button
            variant="outlined"
            onClick={handleClick}
          >
            Mergi acasa
          </Button>
        </section>
      )}
      {isError && (
        <section className={globalStyles["section-modal"]}>
          <ErrorIcon className={globalStyles["icon-error"]} />
          <p>Confirmarea adresei de email a esuat.</p>
        </section>
      )}
      {!isSucces && !isError && (
        <section className={globalStyles["section-modal"]}>
          <HourglassBottomIcon className={globalStyles["icon-loading"]} />
          <p>Se incarca</p>
        </section>
      )}
    </div>
  );
};
export default ValidateEmail;
