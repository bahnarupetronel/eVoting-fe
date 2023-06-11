import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../context/form/state";
import { Button, Form, Field, Input } from "./fields/index.js";

const Form2 = ({ changeLocation }) => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: state,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    changeLocation("form3");
  };

  const goToPrevious = (data) => {
    data ? setState({ ...state, ...data }) : "";
    changeLocation("form1");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Adresa</legend>
        <Field label="Adresa 1*" error={errors?.addressLine1}>
          <Input
            placeholder="Adresa"
            className={errors?.addressLine1 ? "field-error" : "no-field-error"}
            {...register("addressLine1", {
              required: "Adresa 1 e obligatorie",
            })}
            id="addressLine1"
          />
        </Field>
        <Field label="Adresa 2" error={errors?.addressLine2}>
          <Input
            placeholder="Adresa"
            className={errors?.addressLine2 ? "field-error" : "no-field-error"}
            {...register("addressLine2")}
            id="addressLine2"
          />
        </Field>
        <Field label="Numarul de telefon*" error={errors?.phoneNumber}>
          <Input
            placeholder="Numarul de telefon"
            className={errors?.zip ? "field-error" : "no-field-error"}
            {...register("phoneNumber", {
              required: "Numarul de telefon este obligatoriu!",
            })}
            id="phoneNumber"
          />
        </Field>
        <Field label="Zip/Postal code*" error={errors?.postalCode}>
          <Input
            placeholder="Cod postal"
            className={errors?.postalCode ? "field-error" : "no-field-error"}
            {...register("postalCode", {
              required: "Cod postal",
            })}
            id="postalCode"
          />
        </Field>
        <Field label="Oras*" error={errors?.city}>
          <Input
            placeholder="Oras"
            className={errors?.city ? "field-error" : "no-field-error"}
            {...register("city", {
              required: "Orasul este obligatoriu!",
            })}
            id="city"
          />
        </Field>
        <Field label="Judet*" error={errors?.state}>
          <Input
            placeholder="State"
            className={errors?.state ? "field-error" : "no-field-error"}
            {...register("state", {
              required: "Judetul este obligatoriu",
            })}
            id="state"
          />
        </Field>
        <Field label="Tara*" error={errors?.country}>
          <Input
            placeholder="Tara"
            className={errors?.country ? "field-error" : "no-field-error"}
            {...register("country", {
              required: "Tara este obligatorie!",
            })}
            id="country"
          />
        </Field>
        <div className="button-row">
          <Button onClick={handleSubmit(goToPrevious)}>{"<"} Inapoi</Button>
          <Button onClick={handleSubmit(saveData)}>Urmatorul {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default Form2;
