import React from "react";
import { FormProvider } from "../../../context/form/state";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Confirm from "./Confirm";
import Stepper from "./fields/Stepper";
import voteImage from "../../../assets/vote.jpg";
import styles from "./register.module.css";
import stylesAuth from "../../../shared/stylesheets/auth.module.css";

const Register = () => {
  // navigate("./register/form1");
  return (
    <div className={stylesAuth["container"]}>
      <FormProvider>
        <div className={stylesAuth["img-container"]}>
          <img src={voteImage} alt="vote-image" />
        </div>
        <div className={styles["form-container"]}>
          <Stepper />
        </div>
      </FormProvider>
    </div>
  );
};

export default Register;
