import { useState } from "react";
import { useAppState } from "../../../context/form/state";
import { Button, Form } from "./fields/index.js";
import { UploadFile } from "./UploadFile";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const Form3 = ({ changeLocation, handleFileUpate }) => {
  const [state, setState] = useAppState();
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const handleSubmit = () => {
    if (file) {
      handleFileUpate(file);
      setState({ ...state, file: file });
      changeLocation("confirm");
    } else
      NotificationManager.error(
        "We're sorry, you have to upload your a photo of your CI",
        "Upload photo",
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
        "We're sorry, you have to upload your a photo of your CI",
        "Upload photo",
        5000
      );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add CI photo</legend>
        <UploadFile setFile={setFile} file={file} setFileUrl={setFileUrl} />
        <Button onClick={goToPrevious}>{"<"} Previous</Button>
        <Button onClick={handleSubmit}>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Form3;
