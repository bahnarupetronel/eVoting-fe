import React from "react";
import Menu from "./Menu";
import UserContainer from "./UserContainer";
import styles from "./user.module.css";

const User = () => {
  return (
    <div className={styles["container-user"]}>
      <Menu />
      <UserContainer />
    </div>
  );
};

export default User;
