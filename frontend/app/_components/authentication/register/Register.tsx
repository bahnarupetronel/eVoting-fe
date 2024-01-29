"use client";

import { useState } from "react";
import Image from "next/image";
import { FormProvider } from "@/_context/form/state.tsx";
import Form1 from "@/_components/authentication/register/Form1";
import Form2 from "@/_components/authentication/register/Form2";
import Form3 from "@/_components/authentication/register/Form3";
import Confirm from "@/_components/authentication/register/Confirm";
import Stepper from "@/_components/form/Stepper";
import stylesAuth from "@/_shared/stylesheets/auth.module.css";
import styles from "@/_components/authentication/register/register.module.css";

const Register = () => {
  const [location, setLocation] = useState("form1");
  const [file, setFile] = useState(null);

  const changeLocation = (newLocation: string): void => {
    setLocation(newLocation);
  };

  const handleFileUpate = (file: File): void => {
    setFile(file);
  };

  return (
    <div className={stylesAuth["container"]}>
      <FormProvider>
        <div className={stylesAuth["img-container"]}>
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
          ) : location === "form3" ? (
            <Form3
              changeLocation={changeLocation}
              handleFileUpate={handleFileUpate}
            />
          ) : (
            <Confirm
              changeLocation={changeLocation}
              file={file}
            />
          )}
        </div>
      </FormProvider>
    </div>
  );
};

export default Register;
