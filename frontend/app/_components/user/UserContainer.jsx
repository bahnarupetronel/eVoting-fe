"use client";

import styles from "./user.module.css";
import CustomSpan from "../../_shared/components/customSpan/CustomSpan";
import { useUserDetails } from "./useUserDetails.js";
import Link from "next/link";

const UserContainer = () => {
  const userDetails = useUserDetails();
  return (
    <div className={styles["container-user-details"]}>
      {userDetails ? (
        <ul className={styles["user-details-list"]}>
          <h2>Profilul meu</h2>
          <hr />
          <li>
            Nume: <CustomSpan text={userDetails.name} />
          </li>
          <li>
            Email: <CustomSpan text={userDetails.email} />
          </li>
          <li>
            CNP: <CustomSpan text={userDetails.cnp} />
          </li>
          <li>
            Seria si numarul: <CustomSpan text={userDetails.seriesAndNumber} />
          </li>
          <li>
            Adresa 1:
            <CustomSpan text={userDetails.addressLine1} />
          </li>
          <li>
            Adresa 2:
            <CustomSpan text={userDetails.addressLine2} />
          </li>
          <li>
            Cod postal: <CustomSpan text={userDetails.postalCode} />
          </li>
          <li>
            Localitate: <CustomSpan text={userDetails.localityId} />
          </li>
          <li>
            Judet:
            <CustomSpan text={userDetails.countyId} />
          </li>
          <li>
            Tara:
            <CustomSpan text={userDetails.country} />
          </li>
          <Link
            className={styles["btn-edit"]}
            href="/user/edit-profile"
            key="edit-profile"
          >
            Editeaza profilul
          </Link>
        </ul>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserContainer;
