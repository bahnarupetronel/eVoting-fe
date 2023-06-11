import { React, useState } from "react";
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
  const [location, setLocation] = useState("form1");
  const [file, setFile] = useState(null);

  const changeLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const handleFileUpate = (file) => {
    setFile(file);
  };

  return (
    <div className={stylesAuth["container"]}>
      <FormProvider>
        <div className={stylesAuth["img-container"]}>
          <img src={voteImage} alt="vote-image" />
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
            <Confirm changeLocation={changeLocation} file={file} />
          )}
        </div>
      </FormProvider>
    </div>
  );
};

export default Register;
