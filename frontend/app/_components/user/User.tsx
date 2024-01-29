"use client";

import { useUserDetails } from "./useUserDetails";
import { UserDetailsModel } from "../../_interfaces/userDetails.model";
import styles from "./user.module.css";
import UserDetails from "./UserDetails";
import Menu from "./Menu";
import Header from "./Header";
import ValidateIdentity from "./validate/ValidateIdentity";
import ValidateEmail from "./validate/ValidateEmail";

const User = () => {
  const userDetails: UserDetailsModel = useUserDetails();
  return (
    <div className={styles["container-user"]}>
      <Menu />
      <section className={styles["section"]}>
        {!userDetails?.isEmailConfirmed && (
          <ValidateEmail email={userDetails?.email} />
        )}
        <Header />
        <hr className={styles["hr"]} />
        <UserDetails user={userDetails} />
        <ValidateIdentity isEmailConfirmed={userDetails?.isEmailConfirmed} />
      </section>
    </div>
  );
};

export default User;
