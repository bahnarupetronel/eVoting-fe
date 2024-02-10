"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { Button, Input } from "@mui/material";
import { isEmailValid } from "../../form/utils/validateForm";
import { useForgotPassword } from "@/_hooks/auth";
import styles from "@/_shared/stylesheets/auth.module.css";
import btn from "@/_shared/stylesheets/button-auth.module.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const mutation = useForgotPassword();

  const forgotPassword = async () => {
    if (isEmailValid(email)) {
      mutation.mutate(email, {
        onSuccess: (response) => {
          NotificationManager.success(
            "Check your email. A message was sent for you to modify your password.",
            "Check your email. ",
            5000
          );
          router.push("/forgot-password/confirm");
        },
        onError: () => {
          NotificationManager.error(
            "Something went wrong. Try again!",
            "Error",
            5000
          );
        },
      });
    }
  };

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
      <div className={styles["form-container"]}>
        <form className={`${styles["form-default"]}`}>
          <h2 className={styles["title-auth"]}>Schimba parola</h2>
          <Input
            error={email.length > 0 && !isEmailValid(email)}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduceti adresa de email"
            className={styles["input"]}
            autoComplete="true"
          />
          {email.length > 0 && !isEmailValid(email) && (
            <p className={styles["error"]}>Email-ul nu este corect.</p>
          )}
          <Button
            variant="outlined"
            className={btn["btn-sign-up"]}
            onClick={forgotPassword}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
