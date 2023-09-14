import Menu from "../../_components/user/Menu.jsx";
import UserContainer from "../../_components/user/UserContainer";
import styles from "../../_components/user/user.module.css";

const UserAccount = () => {
  return (
    <div className={styles["container-user"]}>
      <Menu />
      <UserContainer />
    </div>
  );
};

export default UserAccount;
