"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import btn from "@/_shared/stylesheets/button-auth.module.css";
import styles from "@/_shared/stylesheets/auth.module.css";
import { useCookies } from "@/_hooks/useCookies.ts";

import {
  isEmailValid,
  isPasswordValid,
  loginFormErrors,
} from "../../form/utils/validateForm.ts";
import { useLogin } from "@/_hooks/auth.ts";
import { useAuth } from "@/_context/user/UserContext";
import { UserLogin } from "@/_interfaces/userLogin.model.ts";
import { UserLoginResponse } from "@/_interfaces/userLoginResponse.model.ts";
import { Button, TextField } from "@mui/material";
import Error from "../Error.tsx";

const LoginForm = () => {
  const router = useRouter();
  const { setCookie } = useCookies();
  const { setUser, setIsLoggedIn } = useAuth();
  const userMutation = useLogin();
  const state = { password: "", email: "" };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: state,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const loginUser = async (userInput: UserLogin) => {
    event.preventDefault();
    userMutation.mutate(userInput, {
      onSuccess: (response) => {
        NotificationManager.success(
          "Your login was successful.",
          "Successfully logged in. ",
          5000
        );
        const user: UserLoginResponse = response.data;
        setCookie("isUserLoggedIn", true);
        setCookie("user", user.email);
        setCookie("role", user.roles);
        setUser(user);
        setIsLoggedIn(true);
        router.push("/");
      },
      onError: () => {
        NotificationManager.error(
          "We're sorry, but your login was unsuccessful. Incorrect email or password",
          "Login failed",
          5000
        );
      },
    });
  };

  return (
    <div className={styles["form-container"]}>
      <form
        onSubmit={handleSubmit(loginUser)}
        className={`${styles["form-default"]}`}
      >
        <h2 className={styles["title-auth"]}>Intra in cont</h2>
        <span
          role="alert"
          id="invalid-form"
          aria-hidden="true"
          hidden
          className={styles["span-error"]}
        >
          Toate campurile sunt obligatorii
        </span>
        <div className={styles["field"]}>
          <label htmlFor="email">Email:</label>
          <TextField
            size="small"
            variant="outlined"
            className={styles["input"]}
            placeholder="Introduceti email-ul"
            autoComplete="true"
            {...register("email", {
              required: "Email-ul este obligatoriu",
              validate: (value) =>
                isEmailValid(value)
                  ? true
                  : "Adresa de email are format invalid.",
            })}
          />
          <Error error={errors?.email} />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="password">Parola:</label>
          <TextField
            type="password"
            name="password"
            size="small"
            className={styles["input"]}
            placeholder="Introduceti parola"
            autoComplete="true"
            {...register("password", {
              required: "Parola este obligatorie",
            })}
          />
          {errors?.password?.message.toString() ===
            "Parola este obligatorie" && <Error error={errors?.password} />}
        </div>

        <Button
          type="submit"
          variant="outlined"
          className={btn["btn-sign-up"]}
        >
          Conectare
        </Button>
        <p className={styles["p-auth"]}>
          Nu ai un cont?{" "}
          <Link
            href="/register"
            className={styles["a-auth"]}
          >
            Poti crea unul acum!
          </Link>
        </p>
        <p className={styles["p-auth"]}>
          Ai uitat parola?{" "}
          <Link
            href="/forgot-password"
            className={styles["a-auth"]}
          >
            Resetare parola.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
