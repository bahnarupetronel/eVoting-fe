import React, { useState, useEffect } from "react";
import styles from "./user.module.css";
import CustomSpan from "../../shared/components/CustomSpan";

const UserContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from an API or other data source
    // For simplicity, let's assume the data is retrieved and stored in the state
    const userData = {
      name: "John Doe",
      email: "johndoe@example.com",
      addressLine1: "Adresa 1",
      addressLine2: "Adresa 2",
      state: "judet",
      city: "Oras",
      country: "Tara",
      cnp: "CNP",
      postalCode: "Cod postal",
    };
    setUser(userData);
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
            Oras: <CustomSpan text={user.city} />
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
