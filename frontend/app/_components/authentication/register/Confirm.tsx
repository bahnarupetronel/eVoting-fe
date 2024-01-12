import { useForm } from "react-hook-form";
import { useRegisterFormState } from "@/_context/form/state";
import {
  Form,
  Section,
  SectionRow,
  ImageLink,
} from "@/_components/form/getFormComponents";
import styles from "@/_components/form/form.module.css";
import getS3UploadLink from "@/_shared/utils/getS3UploadLink";
import uploadFile from "@/_shared/utils/uploadFile";
import registerUser from "@/_services/auth/registerUser";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import CustomSpan from "@/_components/form/customSpan/CustomSpan";

const Confirm = ({ changeLocation, file }) => {
  const { state } = useRegisterFormState();
  const { handleSubmit } = useForm({ defaultValues: state });
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
        window.location.href = "/login";
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
      className={styles["confirm-form-container"]}
    >
      <Section
        title="Detalii personale"
        handleClick={() => handleClick("form1")}
      >
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Nume: <CustomSpan text={state.name} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Email: <CustomSpan text={state.email} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Codul numeric personal: <CustomSpan text={state.cnp} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Seria si numarul: <CustomSpan text={state.seriesAndNumber} />
          </p>
        </SectionRow>
      </Section>
      <Section
        title="Adresa"
        handleClick={() => handleClick("form2")}
      >
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Adresa 1: <CustomSpan text={state.addressLine1} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Adresa 2: <CustomSpan text={state.addressLine2} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Numarul de telefon:
            <CustomSpan text={state.phoneNumber} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Cod postal: <CustomSpan text={state.postalCode} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Oras: <CustomSpan text={state.city} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Judet: <CustomSpan text={state.state} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Tara: <CustomSpan text={state.country} />
          </p>
        </SectionRow>
      </Section>
      <Section
        title="Fisier"
        handleClick={() => handleClick("form3")}
      >
        <SectionRow>
          <div className={styles["p-confirm"]}>
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
