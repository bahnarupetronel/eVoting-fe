"use client";

import { useForm } from "react-hook-form";
import { Input, Form, Field } from "@/_components/form/getFormComponents";
import styles from "./styles.module.css";

export const EditProfileContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  return (
    <main className={styles["container"]}>
      <Form>
        <fieldset className={styles["fieldset"]}>
          <legend>Detalii</legend>
          <Field
            label="Nume*"
            // error={errors?.addressLine1}
          >
            <Input
              placeholder="Nume"
              //   className={
              //     errors?.addressLine1 ? "field-error" : "no-field-error"
              //   }
              {...register("name", {
                required: "Numele este obligatoriu",
              })}
              id="name"
            />
          </Field>
          <Field
            label="CNP"
            // error={errors?.addressLine1}
          >
            <Input
              placeholder="CNP"
              //   className={
              //     errors?.addressLine1 ? "field-error" : "no-field-error"
              //   }
              {...register("cnp", {
                required: "CNP-ul este obligatoriu",
              })}
              id="cnp"
            />
          </Field>
          <Field
            label="Seria si numarul"
            // error={errors?.addressLine1}
          >
            <Input
              placeholder="Seria si numarul"
              //   className={
              //     errors?.addressLine1 ? "field-error" : "no-field-error"
              //   }
              {...register("seriesAndNumber", {
                required: "Seria si numarul sunt obligatorii",
              })}
              id="seriesAndNumber"
            />
          </Field>
          <Field
            label="Adresa 1*"
            // error={errors?.addressLine1}
          >
            <Input
              placeholder="Adresa"
              //   className={
              //     errors?.addressLine1 ? "field-error" : "no-field-error"
              //   }
              {...register("addressLine1", {
                required: "Adresa 1 e obligatorie",
              })}
              id="addressLine1"
            />
          </Field>
          <Field
            label="Adresa 2"
            // error={errors?.addressLine2}
          >
            <Input
              placeholder="Adresa"
              //   className={
              //     errors?.addressLine2 ? "field-error" : "no-field-error"
              //   }
              {...register("addressLine2")}
              id="addressLine2"
            />
          </Field>
          <Field
            label="Cod postal"
            // error={errors?.addressLine1}
          >
            <Input
              placeholder="Cod postal"
              //   className={
              //     errors?.addressLine1 ? "field-error" : "no-field-error"
              //   }
              {...register("postalCode", {
                required: "Codul postal este obligatoriu",
              })}
              id="postalCode"
            />
          </Field>
        </fieldset>
      </Form>
    </main>
  );
};
export default EditProfileContainer;
