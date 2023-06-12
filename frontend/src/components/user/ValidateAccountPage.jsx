import Menu from "./Menu";
import styles from "./user.module.css";

const ValidateAccountPage = () => {
  return (
    <div className={styles["container-user"]}>
      <Menu />
      <div className={styles["container-user-validate-account"]}>
        {" "}
        Validate account
      </div>
    </div>
  );
};
export default ValidateAccountPage;
