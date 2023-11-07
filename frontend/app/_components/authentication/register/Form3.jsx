import { useState } from "react";
import { useRegisterFormState } from "../../../_context/form/state";
import { Button, Form } from "../../form/getFormComponents.js";
import { UploadFile } from "./UploadFile";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const Form3 = ({ changeLocation, handleFileUpate }) => {
  const [state, setState] = useRegisterFormState();
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const handleSubmit = () => {
    if (file) {
      handleFileUpate(file);
      setState({ ...state, file: file });
      changeLocation("confirm");
    } else
      NotificationManager.error(
        "Ne pare rau, trebuie sa va introduceti poza de la cartea de identitate.",
        "Incarca poza!",
        5000
      );
  };

  const goToPrevious = () => {
    if (file) {
      handleFileUpate(file);
      setState({ ...state, file: file });
      changeLocation("form2");
    } else
      NotificationManager.error(
        "Ne pare rau, trebuie sa va introduceti poza de la cartea de identitate.",
        "Incarca poza!",
        5000
      );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Adauga poza cu cartea de identitate</legend>
        <UploadFile
          setFile={setFile}
          file={file}
          setFileUrl={setFileUrl}
        />
        <Button onClick={goToPrevious}>{"<"} Inapoi</Button>
        <Button onClick={handleSubmit}>Urmatorul {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Form3;
