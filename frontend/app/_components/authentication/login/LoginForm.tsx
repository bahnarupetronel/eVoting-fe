"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";

import btn from "../../../_shared/stylesheets/button-auth.module.css";
import styles from "../../../_shared/stylesheets/auth.module.css";
import { useCookies } from "../../../_hooks/useCookies.ts";

import {
  isEmailValid,
  isPasswordValid,
  loginFormErrors,
} from "../../../_shared/utils/validateForm";
import useLogin from "./useLogin";
import { useAuth } from "../../../_context/user/UserContext";
import { Input } from "../../form/Input";
import { UserLogin } from "../../../_interfaces/userLogin.model";
import { UserLoginResponse } from "../../../_interfaces/userLoginResponse.model";

const LoginForm = () => {
  const { setCookie } = useCookies();
  const router = useRouter();
  const { setUser, setIsLoggedIn } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const loginUser = async (userInput: UserLogin) => {
    const response = await useLogin(userInput);

    if (response.status === 200) {
      NotificationManager.success(
        "Your login was successful.",
        "Successfully logged in. ",
        5000
      );
      const user: UserLoginResponse = await response.data;
      setCookie("isUserLoggedIn", true);
      setCookie("user", user);
      setUser(user);
      setIsLoggedIn(true);
      router.push("/");
    } else {
      NotificationManager.error(
        "We're sorry, but your login was unsuccessful. Incorrect email or password",
        "Login failed",
        5000
      );
    }
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
        <Input
          name="email"
          label="Email"
          className={errors?.email ? "field-error" : "no-field-error"}
          id={styles["login-email"]}
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
        <Input
          type="password"
          name="password"
          label="Parola"
          className={errors?.password ? "field-error" : "no-field-error"}
          placeholder="Introduceti parola"
          id={styles["login-password"]}
          autoComplete="true"
          {...register("password", {
            required: "Parola este obligatorie",
          })}
        />
        <span
          id="invalid-entries"
          aria-hidden="true"
          hidden
          className={styles["span-error"]}
        >
          Utilizator/parola incorecte.
        </span>
        <button
          type="submit"
          className={btn["btn-sign-up"]}
        >
          Inregistreaza-te
        </button>
        <p className={styles["p-auth"]}>
          Nu ai un cont?{" "}
          <Link
            href="/register"
            className={styles["a-auth"]}
          >
            {" "}
            Poti crea unul acum!
          </Link>
        </p>
        <p className={styles["p-auth"]}>
          Ai uitat parola?{" "}
          <Link
            href="/reset-password"
            className={styles["a-auth"]}
          >
            {" "}
            Resetare parola.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
