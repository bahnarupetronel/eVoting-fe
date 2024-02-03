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
import { useEffect, useState } from "react";
import { EditProfileModal } from "./editProfile/EditProfileModal";
import { useGetLocalityById } from "@/_hooks/counties";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const email = useCookies().getCookie("user");
  const { isSuccess, data: data } = useGetUserDetails(email);
  const userDetails = data?.data;
  const { isSuccess: isSuccessLocality, data: locality } = useGetLocalityById(
    userDetails?.localityId,
    enabled
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (userDetails?.localityId) {
      setEnabled(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessLocality) {
      userDetails.locality = locality?.data.name;
      userDetails.county = locality?.data.county;
      console.log(userDetails);
      setEnabled(false);
    }
  }, [isSuccessLocality]);

  return (
    <div className={styles["container-user"]}>
      <Menu />
      <section className={styles["section"]}>
        {isSuccess && !userDetails?.isEmailConfirmed && (
          <ValidateEmailHeader email={email} />
        )}
        <Header handleOpenModal={handleOpenModal} />
        <hr className={styles["hr"]} />
        <UserDetails user={userDetails} />
        {isSuccess && (
          <Verifications
            isEmailConfirmed={userDetails?.isEmailConfirmed}
            isIdentityVerified={userDetails?.isIdentityVerified}
          />
        )}
        {isSuccess && (
          <EditProfileModal
            user={userDetails}
            handleCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
          />
        )}
      </section>
    </div>
  );
};

export default User;
