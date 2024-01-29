"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import authStyles from "@/_shared/stylesheets/auth.module.css";
import styles from "./forgotPassword.module.css";
import Image from "next/image";
import { Button, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import { errors, isPasswordValid } from "../../form/utils/validateForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useChangePassword } from "@/_hooks/auth";

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
        onSuccess: (response) => {
          NotificationManager.success(
            "Check your email. A message was sent for you to modify your password.",
            "Check your email. ",
            5000
          );
          router.push("/login");
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
    <main className={authStyles["container"]}>
      <div className={authStyles["img-container"]}>
        <Image
          src="/assets/vote.jpg"
          alt="vote-image"
          fill
          priority
          sizes="100%"
        />
      </div>
      <form
        className={styles["section"]}
        onSubmit={handleSubmit}
      >
        <h2 className={styles["title"]}>Schimbati parola</h2>
        <ul className={styles["ul"]}>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="name"
              className={styles["label-event"]}
            >
              Parola noua:
            </InputLabel>
            <Input
              error={!isPasswordValid(password.password)}
              onChange={(e) => handleChange(e, "password")}
              placeholder="Introduceti numele candidatului"
              className={styles["input"]}
              type="password"
            />
            {password.password.length > 0 &&
              !isPasswordValid(password.password) && (
                <p className={authStyles["error"]}>
                  {errors["invalid-password"]}
                </p>
              )}
          </li>
          <li className={styles["li"]}>
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
              placeholder="Introduceti numele candidatului"
              className={styles["input"]}
            />
            {password.confirmPassword.length > 0 &&
              password.password !== password.confirmPassword && (
                <p className={authStyles["error"]}>
                  {errors["invalid-confirm-password"]}
                </p>
              )}
          </li>
        </ul>

        <Button
          variant="outlined"
          type="submit"
          className={styles["btn-submit"]}
        >
          Submit
        </Button>
      </form>
    </main>
  );
};
export default ChangePassword;
