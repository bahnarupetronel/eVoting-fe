import { useForm } from "react-hook-form";
import { useRegisterFormState } from "@/_context/form/state";
import { Form } from "@/_components/form/getFormComponents";
import {
  isNameValid,
  isPasswordValid,
  isEmailValid,
} from "../../form/utils/validateForm";
import { isCNPValid } from "../../form/utils/validateCNP";
import { isSerieAndNumberValid } from "../../form/utils/validateSeriesAndNumber";
import styles from "@/_shared/stylesheets/auth.module.css";
import { Button, TextField } from "@mui/material";
import Error from "../Error.tsx";

const Form1 = ({ changeLocation }: { changeLocation: Function }) => {
  const { state, setState } = useRegisterFormState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: state,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const watchPassword = watch("password");

  const saveData = (data): void => {
    event.preventDefault();
    setState({ ...state, ...data });
    changeLocation("form2");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset className={styles["fieldset"]}>
        <legend>Detalii</legend>
        <div className={styles["field"]}>
          <label>Nume</label>
          <TextField
            variant="outlined"
            placeholder="Introduceti numele"
            className={styles["input"]}
            {...register("lastName", {
              required: "Numele e obligatoriu!",
              validate: (value) =>
                isNameValid(value)
                  ? true
                  : "Nume invalid. Nu poate contine numere sau caractere speciale",
            })}
            id="last-name"
          />
          <Error error={errors?.lastName} />
        </div>
        <div className={styles["field"]}>
          <label>Prenume</label>
          <TextField
            variant="outlined"
            placeholder="Introduceti prenumele"
            className={styles["input"]}
            {...register("firstName", {
              required: "Prenumele e obligatoriu!",
              validate: (value) =>
                isNameValid(value)
                  ? true
                  : "Nume invalid. Nu poate contine numere sau caractere speciale",
            })}
            id="full-name"
          />
          <Error error={errors?.firstName} />
        </div>
        <div className={styles["field"]}>
          <label>Codul numeric personal</label>
          <TextField
            variant="outlined"
            placeholder="Introduceti CNP-ul"
            className={styles["input"]}
            {...register("cnp", {
              required: "CNP-ul e obligatoriu!",
              validate: (value) =>
                isCNPValid(value)
                  ? true
                  : "CNP-ul rebuie sa contina 13 numere. CNP-ul este invalid sau formatul este gresit. ",
            })}
            id="cnp"
          />
          <Error error={errors?.cnp} />
        </div>
        <div className={styles["field"]}>
          <label>ID: Seria si numarul</label>
          <TextField
            variant="outlined"
            placeholder="Introduceti seria si numarul"
            className={styles["input"]}
            {...register("seriesAndNumber", {
              required: "Seria si numarul sunt obligatorii!",
              validate: (value) =>
                isSerieAndNumberValid(value)
                  ? true
                  : "Format invalid.Trebuie sa contina 2 litere si 6 numere. ex: AA123456",
            })}
            id="series-and-number"
          />
          <Error error={errors?.seriesAndNumber} />
        </div>
        <div className={styles["field"]}>
          <label>Email</label>
          <TextField
            variant="outlined"
            placeholder="Introduceti email-ul"
            className={styles["input"]}
            {...register("email", {
              required: "Email este obligatoriu",
              validate: (value) =>
                isEmailValid(value)
                  ? true
                  : "Formatul email-ului este invalid.",
            })}
            type="email"
            id="email"
          />
          <Error error={errors?.email} />
        </div>
        <div className={styles["field"]}>
          <label>Parola</label>
          <TextField
            variant="outlined"
            placeholder="Introduceti parola"
            className={styles["input"]}
            {...register("password", {
              required: "Parola e obligatorie!",
              validate: (value) =>
                isPasswordValid(value)
                  ? true
                  : "Parola trebuie sa aiba intre 8 si 20 de caractere, sa contina cel putin o litera mare, o litera mica si un numar.Poate contine caractere speciale.",
            })}
            type="password"
            id="password"
          />
          <Error error={errors?.password} />
        </div>
        <div className={styles["field"]}>
          <label>Confirma parola</label>
          <TextField
            variant="outlined"
            placeholder="Reintroduceti parola"
            className={styles["input"]}
            {...register("confirmPassword", {
              required: "Confirmati parola!",
              validate: (value) =>
                value === watchPassword || "Parolele nu sunt asemanatoare!",
            })}
            type="password"
            id="password-confirm"
          />
          <Error error={errors?.confirmPassword} />
        </div>
        <Button
          type="button"
          variant="outlined"
          onClick={handleSubmit(saveData)}
        >
          Urmatorul {">"}
        </Button>
      </fieldset>
    </Form>
  );
};

export default Form1;
