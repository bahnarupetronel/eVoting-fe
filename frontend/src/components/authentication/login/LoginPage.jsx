import LoginForm from "./LoginForm";
import voteImage from "../../../assets/vote.jpg";
import styles from "../../../shared/stylesheets/auth.module.css";

const LoginPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["img-container"]}>
        <img src={voteImage} alt="vote-image" />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
