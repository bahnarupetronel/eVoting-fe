import { useForm } from "react-hook-form";
import { useRegisterFormState } from "@/_context/form/state";
import {
  Form,
  Section,
  SectionRow,
  ImageLink,
} from "@/_components/form/getFormComponents";
import styles from "@/_shared/stylesheets/auth.module.css";
import { useRegisterUser } from "@/_hooks/auth";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import CustomSpan from "@/_components/form/customSpan/CustomSpan";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const Confirm = ({ changeLocation }) => {
  const router = useRouter();
  const mutation = useRegisterUser();
  const { state } = useRegisterFormState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = async () => {
    event.preventDefault();
    let stateCopy = { ...state };
    delete stateCopy.confirmPassword;
    mutation.mutate(stateCopy, {
      onSuccess: () => {
        NotificationManager.success(
          "Inregistrarea s-a realizat cu succes. Te poti conecta si poti incepe sa utilizezi serviciile noatre. Va multumim!",
          "Inregistrare realizata cu succes! ",
          5000
        );
        router.push("/login");
      },
      onError: () => {
        NotificationManager.error(
          "Ne pare rau, inregistrarea nu s-a realizat cu succes. Daca aveti un cont, va puteti conecta. Email-ul sau parola sunt deja folosite.",
          "Inregistrarea a esuat!",
          5000
        );
      },
    });
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
            Nume: <CustomSpan text={state.lastName} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Prenume: <CustomSpan text={state.firstName} />
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
            Localitate: <CustomSpan text={state.locality} />
          </p>
        </SectionRow>
        <SectionRow>
          <p className={styles["p-confirm"]}>
            Judet: <CustomSpan text={state.county} />
          </p>
        </SectionRow>
      </Section>
      <div className={styles["btn-container"]}>
        <Button
          type="submit"
          variant="outlined"
          className={styles["btn-submit"]}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Confirm;
