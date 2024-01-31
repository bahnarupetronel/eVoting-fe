"use client";

import { UserDetailsModel } from "../../_interfaces/userDetails.model";
import styles from "./user.module.css";
import UserDetails from "./UserDetails";
import Menu from "./Menu";
import Header from "./Header";
import Verifications from "./validate/Verifications";
import ValidateEmailHeader from "./validate/ValidateEmailHeader";
import { useGetUserDetails } from "@/_hooks/user";
import useCookies from "@/_hooks/useCookies";

const User = () => {
  const email = useCookies().getCookie("user");
  const { isSuccess, data: data } = useGetUserDetails(email);
  const userDetails: UserDetailsModel = data?.data;
  return (
    <div className={styles["container-user"]}>
      <Menu />
      <section className={styles["section"]}>
        {isSuccess && !userDetails?.isEmailConfirmed && (
          <ValidateEmailHeader email={email} />
        )}
        <Header />
        <hr className={styles["hr"]} />
        <UserDetails user={userDetails} />
        {isSuccess && (
          <Verifications
            isEmailConfirmed={userDetails?.isEmailConfirmed}
            isIdentityVerified={userDetails?.isIdentityVerified}
          />
        )}
      </section>
    </div>
  );
};

export default User;
