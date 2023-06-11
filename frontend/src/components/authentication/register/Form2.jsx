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
        <legend>Address</legend>
        <Field label="Address line 1*" error={errors?.address1}>
          <Input
            placeholder="Address"
            className={errors?.address1 ? "field-error" : "no-field-error"}
            {...register("addressLine1", {
              required: "Address 1 is required",
            })}
            id="address1"
          />
        </Field>
        <Field label="Address line 2" error={errors?.address2}>
          <Input
            placeholder="Address"
            className={errors?.address2 ? "field-error" : "no-field-error"}
            {...register("addressLine2")}
            id="address2"
          />
        </Field>
        <Field label="Phone number*" error={errors?.phoneNumber}>
          <Input
            placeholder="Phone number"
            className={errors?.zip ? "field-error" : "no-field-error"}
            {...register("phoneNumber", {
              required: "Phone number code is required",
            })}
            id="phoneNumber"
          />
        </Field>
        <Field label="Zip/Postal code*" error={errors?.zip}>
          <Input
            placeholder="Zip/postal code "
            className={errors?.zip ? "field-error" : "no-field-error"}
            {...register("postalCode", {
              required: "Zip/ postal code is required",
            })}
            id="zip"
          />
        </Field>
        <Field label="City*" error={errors?.city}>
          <Input
            placeholder="City"
            className={errors?.city ? "field-error" : "no-field-error"}
            {...register("city", {
              required: "City is required",
            })}
            id="city"
          />
        </Field>
        <Field label="State/Province*" error={errors?.state}>
          <Input
            placeholder="State"
            className={errors?.state ? "field-error" : "no-field-error"}
            {...register("state", {
              required: "State is required",
            })}
            id="county"
          />
        </Field>
        <Field label="Country*" error={errors?.country}>
          <Input
            placeholder="Country"
            className={errors?.country ? "field-error" : "no-field-error"}
            {...register("country", {
              required: "Country is required",
            })}
            id="country"
          />
        </Field>
        <div className="button-row">
          <Button onClick={handleSubmit(goToPrevious)}>{"<"} Previous</Button>
          <Button onClick={handleSubmit(saveData)}>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default Form2;
