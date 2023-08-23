import React, { useState, useEffect } from "react";
import styles from "./user.module.css";
import CustomSpan from "../../shared/components/CustomSpan";
import axios from "../../api/axios.js";

const UserContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from an API or other data source
    // For simplicity, let's assume the data is retrieved and stored in the state
    let isMounted = true;
    const controller = new AbortController();

    const getUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get("/user/details", {
          headers: headers,
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUserDetails();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className={styles["container-user-details"]}>
      {user ? (
        <div>
          <h2>Profilul meu</h2>
          <hr />
          <p>
            Nume: <CustomSpan text={user.name} />
          </p>
          <p>
            Email: <CustomSpan text={user.email} />
          </p>
          <p>
            CNP: <CustomSpan text={user.cnp} />
          </p>
          <p>
            Adresa 1:
            <CustomSpan text={user.addressLine1} />
          </p>
          <p>
            Adresa 2:
            <CustomSpan text={user.addressLine2} />
          </p>
          <p>
            Cod postal: <CustomSpan text={user.postalCode} />
          </p>
          <p>
            Localitate: <CustomSpan text={user.localityId} />
          </p>
          <p>
            Judet:
            <CustomSpan text={user.state} />
          </p>
          <p>
            Tara:
            <CustomSpan text={user.country} />
          </p>

          <button className={styles["btn-edit-user-profile"]}>
            Editeaza profilul
          </button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserContainer;
