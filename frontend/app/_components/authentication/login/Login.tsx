import LoginForm from "./LoginForm";
import Image from "next/image";
import styles from "@/_shared/stylesheets/auth.module.css";

const Login = () => {
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
      <LoginForm />
    </div>
  );
};
export default Login;
