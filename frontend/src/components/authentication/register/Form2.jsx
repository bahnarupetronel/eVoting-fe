import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAppState } from "../../../context/form/state";
import { Button, Form, Field, Input } from "./fields/index.js";
import { phoneNumberValidation } from "../../../shared/utils/phoneNumberValidation.js";
import { getCounties } from "./utils/getCounties.js";
import { getLocalities } from "./utils/getLocalities.js";
import { SlOption, SlSelect } from "@shoelace-style/shoelace/dist/react";

const Form2 = ({ changeLocation }) => {
  const localityRef = useRef();
  const [state, setState] = useAppState();
  const [counties, setCounties] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [localitiesPerCounty, setLocalitiesPerCounty] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: state,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleCountyChange = (event) => {
    setState({ ...state, countyId: event.target.value, localityId: null });
    localityRef.current.value = "default";

    const county = counties.filter((county) => county.id == event.target.value);
    let newLocalities = localities.filter(
      (locality) => locality.county === county[0].name
    );

    newLocalities.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    setLocalitiesPerCounty(newLocalities);
  };

  const handleLocalityChange = (event) => {
    setState({ ...state, localityId: event.target.value });
  };

  const saveData = (data) => {
    setState({ ...state, ...data });
    changeLocation("form3");
  };

  const goToPrevious = (data) => {
    data ? setState({ ...state, ...data }) : "";
    changeLocation("form1");
  };

  useEffect(() => {
    getCounties().then((data) => setCounties(data));
    getLocalities().then((data) => setLocalities(data));
  }, []);

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
        <SlSelect
          label="Judet:"
          className="county"
          placeholder="Selecteaza o varianta!"
          onSlChange={handleCountyChange}
        >
          {counties &&
            counties.map((county) => (
              <SlOption value={county.id} key={county.id} data-key={county.id}>
                {county.name}
              </SlOption>
            ))}
        </SlSelect>
        <SlSelect
          label="Localitate:"
          className="locality"
          placeholder="Selecteaza o varianta!"
          onSlChange={handleLocalityChange}
          ref={localityRef}
        >
          {localitiesPerCounty &&
            localitiesPerCounty.map((locality) => (
              <SlOption
                value={locality.id}
                key={locality.id}
                data-key={locality.id}
              >
                {locality.name}
              </SlOption>
            ))}
        </SlSelect>
        <Field label="Numarul de telefon*" error={errors?.phoneNumber}>
          <Input
            placeholder="Numarul de telefon"
            className={errors?.phoneNumber ? "field-error" : "no-field-error"}
            {...register("phoneNumber", {
              required: "Numarul de telefon este obligatoriu!",
              validate: (value) =>
                phoneNumberValidation(value)
                  ? true
                  : "Numar de telefon invalid.",
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
        <Field label="Zip/Postal code*" error={errors?.postalCode}>
          <Input
            placeholder="State"
            className={errors?.state ? "field-error" : "no-field-error"}
            {...register("state", {
              required: "Judetul este obligatoriu",
            })}
            id="postalCode"
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
