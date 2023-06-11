import { useState, useRef, useReducer } from "react";
import { SlButton, SlInput } from "@shoelace-style/shoelace/dist/react";
import btn from "../../../shared/stylesheets/button-auth.module.css";
import styles from "../../../shared/stylesheets/auth.module.css";
import {
  isEmailValid,
  isPasswordValid,
  loginFormErrors,
} from "../../../shared/utils/validateForm";
import loginUser from "./loginUser";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const addHiddenAttribute = () => {
    const spanError = document.querySelector("#invalid-entries");
    spanError.setAttribute("hidden", "");
    spanError.setAttribute("aria-hidden", "true");
  };

  const removeErrorClass = () => {
    for (let [_, inputClassName] of Object.entries(loginFormErrors)) {
      const element = document.querySelector(`.${inputClassName}`);
      if (element.classList.contains(styles.error))
        element.classList.remove(styles.error);
    }
  };

  const showError = () => {
    const errorSpan = document.querySelector("#invalid-entries");
    errorSpan.removeAttribute("hidden");
    errorSpan.setAttribute("aria-hidden", "false");

    for (let [_, inputClassName] of Object.entries(loginFormErrors)) {
      const input = document.querySelector(`.${inputClassName}`);
      input.classList.add(styles.error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const x = 10;
  const handleSubmit = async (event) => {
    event.preventDefault();
    addHiddenAttribute();
    removeErrorClass();
    if (!isEmailValid(email) || !isPasswordValid(password)) showError();
    else {
      const body = {
        password: password,
        email: email,
      };
      const response = await loginUser(body);
      if (response.status === 200) {
        NotificationManager.success(
          "Your login was successful.",
          "Successfully logged in. ",
          5000
        );
        const data = await response.text();
        localStorage.setItem("isUserLoggedIn", true);
        navigate("/");
      } else {
        NotificationManager.error(
          "We're sorry, but your login was unsuccessful. Incorrect email or password",
          "Login failed",
          5000
        );
      }
    }
  };
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit} className={styles["form-module"]}>
        <h2>Intra in cont</h2>
        <span role="alert" id="invalid-form" aria-hidden="true" hidden>
          Toate campurile sunt obligatorii
        </span>
        <SlInput
          name="email"
          label="Email"
          className="email"
          placeholder="Introduceti email-ul"
          autocomplete
          onSlChange={handleEmailChange}
        />
        <SlInput
          type="password"
          name="password"
          label="Parola"
          className="password"
          placeholder="Introduceti parola"
          password-toggle
          onSlChange={handlePasswordChange}
        />
        <span id="invalid-entries" aria-hidden="true" hidden>
          Parola sau email invalid.
        </span>
        <SlButton
          type="submit"
          variant="primary"
          className={btn["btn-sign-up"]}
        >
          Inregistreaza-te
        </SlButton>
        <p>
          Nu ai un cont? <a href="/register"> Poti crea unul acum!</a>
        </p>
        <p>
          Ai uitat parola? <a href="/reset-password"> Resetare parola.</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
