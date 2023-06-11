import { useForm } from "react-hook-form";
import { useAppState } from "../../../context/form/state";
import {
  Button,
  Form,
  Section,
  SectionRow,
  ImageLink,
} from "./fields/index.js";
import "./form.css";
import getS3UploadLink from "./utils/getS3UploadLink";
import uploadFile from "./utils/uploadFile";
import registerUser from "./utils/registerUser";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";

const Confirm = ({ changeLocation, file }) => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();
  const submitData = async (data) => {
    event.preventDefault();

    const fileExtenstion = file.name.split(".").pop();
    const result = await getS3UploadLink(fileExtenstion);
    console.log(result);
    if (result.status === 200) {
      let url = await result.text();
      const imageUrl = await uploadFile(url, file);
      state.linkCIPhoto = imageUrl;

      let stateCopy = { ...state };
      delete stateCopy.file;
      delete stateCopy.confirmPassword;

      const userRegisterResponse = await registerUser(stateCopy);
      if (userRegisterResponse.status === 200) {
        NotificationManager.success(
          "Inregistrarea s-a realizat cu succes. Te poti conecta si poti incepe sa utilizezi serviciile noatre. Va multumim!",
          "Inregistrare realizata cu succes! ",
          5000
        );
        navigate("/login");
      } else {
        NotificationManager.error(
          "Ne pare rau, inregistrarea nu s-a realizat cu succes. Daca aveti un cont, va puteti conecta. Email-ul sau parola sunt deja folosite.",
          "Inregistrarea a esuat!",
          5000
        );
      }
    }
  };

  const handleClick = (location) => {
    changeLocation(location);
  };

  return (
    <Form
      onSubmit={handleSubmit(submitData)}
      className="confirm-form-container"
    >
      <Section
        title="Detalii personale"
        handleClick={() => handleClick("form1")}
      >
        <SectionRow>
          <p className="p-confirm">
            Nume: <span className="state-info">{state.name}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Email: <span className="state-info">{state.email}</span>{" "}
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Codul numeric personal:{" "}
            <span className="state-info">{state.cnp}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Seria si numarul:{" "}
            <span className="state-info">{state.seriesAndNumber}</span>
          </p>
        </SectionRow>
      </Section>
      <Section title="Adresa" handleClick={() => handleClick("form2")}>
        <SectionRow>
          <p className="p-confirm">
            Adresa 1: <span className="state-info">{state.addressLine1}</span>{" "}
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Adresa 2: <span className="state-info">{state.addressLine2}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Numarul de telefon:{" "}
            <span className="state-info">{state.phoneNumber}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Cod postal: <span className="state-info">{state.postalCode}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Oras: <span className="state-info">{state.city}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Judet: <span className="state-info">{state.state}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Tara: <span className="state-info">{state.country}</span>
          </p>
        </SectionRow>
      </Section>
      <Section title="Fisier" handleClick={() => handleClick("form3")}>
        <SectionRow>
          <div className="p-confirm">
            Numele fisierului:{" "}
            {state?.file?.name && (
              <ImageLink imageName={state.file.name} imageUrl="">
                {state.file.name}
              </ImageLink>
            )}
          </div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

export default Confirm;
