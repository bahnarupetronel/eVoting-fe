import { useForm } from "react-hook-form";
import { useRegisterFormState } from "../../../_context/form/state.jsx";
import styles from "../../form/form.module.css";
import { Button, Form, Field, Input } from "../../form/getFormComponents.js";
import {
  isNameValid,
  isPasswordValid,
  isEmailValid,
} from "../../../_shared/utils/validateForm";
import { isCNPValid } from "../../../_shared/utils/validateCNP";
import { isSerieAndNumberValid } from "../../../_shared/utils/validateSeriesAndNumber";
import authStyle from "../../../_shared/stylesheets/auth.module.css";
import componentStyle from "./register.module.css";

const Form1 = ({ changeLocation }) => {
  const [state, setState] = useRegisterFormState();
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

  const saveData = (data) => {
    event.preventDefault();
    setState({ ...state, ...data });
    // changeLocation("form2");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset className={componentStyle["fieldset"]}>
        <legend>Detalii</legend>
        <Field
          label="Nume*"
          error={errors?.name}
        >
          <Input
            placeholder="Introduceti numele"
            className={errors?.fullName ? "field-error" : "no-field-error"}
            {...register("name", {
              required: "Numele e obligatoriu!",
              validate: (value) =>
                isNameValid(value)
                  ? true
                  : "Nume invalid. Nu poate contine numere sau caractere speciale",
            })}
            id="full-name"
          />
        </Field>
        <Field
          label="Codul numeric personal*"
          error={errors?.cnp}
        >
          <Input
            placeholder="Introduceti CNP-ul"
            className={errors?.cnp ? "field-error" : "no-field-error"}
            {...register("cnp", {
              required: "CNP-ul e obligatoriu!",
              validate: (value) =>
                isCNPValid(value)
                  ? true
                  : "CNP-ul rebuie sa contina 13 numere. CNP-ul este invalid sau formatul este gresit. ",
            })}
            id="cnp"
          />
        </Field>
        <Field
          label="ID: Seria si numarul*"
          error={errors?.seriesAndNumber}
        >
          <Input
            placeholder="Introduceti seria si numarul"
            className={errors?.CNP ? "field-error" : "no-field-error"}
            {...register("seriesAndNumber", {
              required: "Seria si numarul sunt obligatorii!",
              validate: (value) =>
                isSerieAndNumberValid(value)
                  ? true
                  : "Format invalid.Trebuie sa contina 2 litere si 6 numere. ex: AA123456",
            })}
            id="series-and-number"
          />
        </Field>
        <Field
          label="Email*"
          error={errors?.email}
        >
          <Input
            placeholder="Introduceti email-ul"
            className={errors?.email ? "field-error" : "no-field-error"}
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
        </Field>
        <Field
          label="Parola*"
          error={errors?.password}
        >
          <Input
            placeholder="Introduceti parola"
            className={errors?.password ? "field-error" : "no-field-error"}
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
        </Field>
        <Field
          label="Confirma parola*"
          error={errors?.confirmPassword}
        >
          <Input
            placeholder="Reintroduceti parola"
            className={
              errors?.confirmPassword ? "field-error" : "no-field-error"
            }
            {...register("confirmPassword", {
              required: "Confirmati parola!",
              validate: (value) =>
                value === watchPassword || "Parolele nu sunt asemanatoare!",
            })}
            type="password"
            id="password-confirm"
          />
        </Field>
        <Button onClick={handleSubmit(saveData)}>Urmatorul {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Form1;
