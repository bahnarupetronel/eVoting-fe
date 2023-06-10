import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../context/form/state";
import "./form.css";
import { Button, Form, Field, Input } from "./fields/index.js";
import {
  isNameValid,
  isPasswordValid,
  isConfirmPasswordValid,
  isEmailValid,
} from "../../../shared/utils/validateForm";
// import { isCNPValid } from "../../../shared/utils/validateCNP";
import { isSerieAndNumberValid } from "../../../shared/utils/validateSeriesAndNumber";
import styles from "../../../shared/stylesheets/auth.module.css";

const isCNPValid = (value) => {
  return true;
};

const Form1 = () => {
  const [state, setState] = useAppState();
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
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/register/form2");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Personal details</legend>
        <Field label="Full name*" error={errors?.fullName}>
          <Input
            placeholder="Enter your name"
            className={errors?.fullName ? "field-error" : "no-field-error"}
            {...register("fullName", {
              required: "Full name is required",
              validate: (value) =>
                isNameValid(value)
                  ? true
                  : "Invalid name. It cannot contain numbers or special characters.",
            })}
            id="full-name"
          />
        </Field>
        <Field label="Personal numeric code*" error={errors?.CNP}>
          <Input
            placeholder="Enter your CNP"
            className={errors?.CNP ? "field-error" : "no-field-error"}
            {...register("CNP", {
              required: "CNP is required",
              validate: (value) =>
                isCNPValid(value)
                  ? true
                  : "Invalid CNP format. It must have 13 numbers.",
            })}
            id="CNP"
          />
        </Field>
        <Field label="ID: Series and number*" error={errors?.seriesAndNumber}>
          <Input
            placeholder="Enter your series and number"
            className={errors?.CNP ? "field-error" : "no-field-error"}
            {...register("seriesAndNumber", {
              required: "Serie and number are mandatory",
              validate: (value) =>
                isSerieAndNumberValid(value)
                  ? true
                  : "Invalid format.It must contain 2 letters and 6 numbers",
            })}
            id="series-and-number"
          />
        </Field>
        <Field label="Email*" error={errors?.email}>
          <Input
            placeholder="Enter your email"
            className={errors?.email ? "field-error" : "no-field-error"}
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                isEmailValid(value) ? true : "Invalid email format.",
            })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="Password*" error={errors?.password}>
          <Input
            placeholder="Enter your password"
            className={errors?.password ? "field-error" : "no-field-error"}
            {...register("password", {
              required: "Password is required",
              validate: (value) =>
                isPasswordValid(value)
                  ? true
                  : "The password must have at least 8 and maximum 20 characters,contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.It can contain special characters",
            })}
            type="password"
            id="password"
          />
        </Field>
        <Field label="Confirm password*" error={errors?.confirmPassword}>
          <Input
            placeholder="Reenter your password"
            className={
              errors?.confirmPassword ? "field-error" : "no-field-error"
            }
            {...register("confirmPassword", {
              required: "Confirm the password",
              validate: (value) =>
                value === watchPassword || "The passwords do not match",
            })}
            type="password"
            id="password-confirm"
          />
        </Field>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Form1;
