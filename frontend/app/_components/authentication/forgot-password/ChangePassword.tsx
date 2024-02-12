"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import styles from "@/_shared/stylesheets/auth.module.css";
import Image from "next/image";
import { Button, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import { errors, isPasswordValid } from "../../form/utils/validateForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useChangePassword } from "@/_hooks/auth";
import VoteImage from "../../../../public/assets/vote.jpg";

const ChangePassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const token = searchParams.get("token");
  const mutation = useChangePassword(token);

  const handleChange = (event, field: string): void => {
    setPassword({ ...password, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      password.confirmPassword === password.password &&
      isPasswordValid(password.password)
    ) {
      mutation.mutate(password.password, {
        onSuccess: () => {
          NotificationManager.success(
            "Parola a fost modificata cu succes. Verificati email-ul pentru confirmare.",
            "Parola a fost modificata. ",
            5000
          );
          router.push("/login");
        },
        onError: () => {
          NotificationManager.error(
            "Ceva nu a functionat! Incearca mai tarziu!",
            "Eroare",
            5000
          );
        },
      });
    }
  };

  return (
    <main className={styles["container"]}>
      <div className={styles["img-container"]}>
        <Image
          src={VoteImage}
          alt="vote-image"
          fill
          priority
          sizes="100%"
        />
      </div>
      <div className={styles["form-container"]}>
        <form
          className={`${styles["form-default"]}`}
          onSubmit={handleSubmit}
        >
          <h2 className={styles["title"]}>Schimbati parola</h2>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="name"
              className={styles["label-event"]}
            >
              Parola noua:
            </InputLabel>
            <Input
              error={!isPasswordValid(password.password)}
              onChange={(e) => handleChange(e, "password")}
              placeholder="Parola"
              className={styles["input"]}
              type="password"
            />
            {password.password.length > 0 &&
              !isPasswordValid(password.password) && (
                <p className={styles["field-error"]}>
                  {errors["invalid-password"]}
                </p>
              )}
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="name"
              className={styles["label-event"]}
            >
              Reintroduceti parola:
            </InputLabel>
            <Input
              error={password.password !== password.confirmPassword}
              type="password"
              onChange={(e) => handleChange(e, "confirmPassword")}
              placeholder="Parola"
              className={styles["input"]}
            />
            {password.confirmPassword.length > 0 &&
              password.password !== password.confirmPassword && (
                <p className={styles["field-error"]}>
                  {errors["invalid-confirm-password"]}
                </p>
              )}
          </div>

          <Button
            variant="outlined"
            type="submit"
            className={styles["btn-submit"]}
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
};
export default ChangePassword;
