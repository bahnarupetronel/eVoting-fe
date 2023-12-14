"use client";

import LoginForm from "../../_components/authentication/login/LoginForm";
import styles from "../../_shared/stylesheets/auth.module.css";
import Image from "next/image";
import WithAuthentication from "../../_hooks/WithAuthentication";

const LoginPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["img-container"]}>
        <Image
          src="/assets/vote.jpg"
          alt="vote-image"
          // width={"auto"}
          // height={"auto"}
          fill={true}
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default WithAuthentication(LoginPage);
