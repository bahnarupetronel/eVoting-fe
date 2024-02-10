"use client";

import { useState } from "react";
import Image from "next/image";
import { FormProvider } from "@/_context/form/state.tsx";
import Form1 from "@/_components/authentication/register/Form1";
import Form2 from "@/_components/authentication/register/Form2";
import Confirm from "@/_components/authentication/register/Confirm";
import Stepper from "@/_components/form/Stepper";
import styles from "@/_shared/stylesheets/auth.module.css";

const Register = () => {
  const [location, setLocation] = useState("form1");

  const changeLocation = (newLocation: string): void => {
    setLocation(newLocation);
  };

  return (
    <div className={styles["container"]}>
      <FormProvider>
        <div className={styles["img-container"]}>
          <Image
            src="/assets/vote.jpg"
            alt="vote-image"
            fill
            priority
            sizes="100%"
          />
        </div>
        <div className={styles["form-container"]}>
          <Stepper location={location} />
          {location === "form1" ? (
            <Form1 changeLocation={changeLocation} />
          ) : location === "form2" ? (
            <Form2 changeLocation={changeLocation} />
          ) : (
            <Confirm changeLocation={changeLocation} />
          )}
        </div>
      </FormProvider>
    </div>
  );
};

export default Register;
