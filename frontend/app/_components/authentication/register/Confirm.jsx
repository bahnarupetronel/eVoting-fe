import { useForm } from "react-hook-form";
import { useRegisterFormState } from "../../../_context/form/state";
import {
  Button,
  Form,
  Section,
  SectionRow,
  ImageLink,
} from "../form-components/index.js";
import "../form-components/form.css";
import getS3UploadLink from "./utils/getS3UploadLink";
import uploadFile from "./utils/uploadFile";
import registerUser from "./utils/registerUser";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";
import CustomSpan from "../../../_shared/components/CustomSpan";

const Confirm = ({ changeLocation, file }) => {
  const [state] = useRegisterFormState();
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
            Nume: <CustomSpan text={state.name} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Email: <CustomSpan text={state.email} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Codul numeric personal: <CustomSpan text={state.cnp} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Seria si numarul: <CustomSpan text={state.seriesAndNumber} />
          </p>
        </SectionRow>
      </Section>
      <Section
        title="Adresa"
        handleClick={() => handleClick("form2")}
      >
        <SectionRow>
          <p className="p-confirm">
            Adresa 1: <CustomSpan text={state.addressLine1} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Adresa 2: <CustomSpan text={state.addressLine2} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Numarul de telefon:
            <CustomSpan text={state.phoneNumber} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Cod postal: <CustomSpan text={state.postalCode} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Oras: <CustomSpan text={state.city} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Judet: <CustomSpan text={state.state} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Tara: <CustomSpan text={state.country} />
          </p>
        </SectionRow>
      </Section>
      <Section
        title="Fisier"
        handleClick={() => handleClick("form3")}
      >
        <SectionRow>
          <div className="p-confirm">
            Numele fisierului:{" "}
            {state?.file?.name && (
              <ImageLink
                imageName={state.file.name}
                imageUrl=""
              >
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
