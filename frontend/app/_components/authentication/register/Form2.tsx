import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { useRegisterFormState } from "@/_context/form/state.tsx";
import { Form } from "@/_components/form/getFormComponents";
import { phoneNumberValidation } from "../../form/utils/phoneNumberValidation.ts";
import { getCounties } from "@/_services/counties/getCounties.ts";
import { getLocalities } from "@/_services/counties/getLocalities.ts";
import { Button, TextField } from "@mui/material";
import styles from "@/_shared/stylesheets/auth.module.css";
import FilterLocalities from "@/_shared/components/FilterLocalities.tsx";
import Error from "../Error.tsx";
import { locality } from "@/_interfaces/locality.model.ts";

const Form2 = ({ changeLocation }: { changeLocation: Function }) => {
  const localityRef = useRef();
  const { state, setState } = useRegisterFormState();
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

  const handleLocalityChange = (locality: locality) => {
    console.log(locality);
    setState({
      ...state,
      localityId: locality.id,
      locality: locality.name,
      county: locality.county,
    });
  };

  const saveData = (data) => {
    setState({ ...state, ...data });
    changeLocation("confirm");
  };

  const goToPrevious = (data) => {
    data ? setState({ ...state, ...data }) : "";
    changeLocation("form1");
  };

  useEffect(() => {
    let isDataStored = false;
    if (window.localStorage !== undefined) {
      const counties = window.localStorage.getItem("counties");
      counties !== null ? setCounties(JSON.parse(counties)) : null;

      const localities = window.localStorage.getItem("localities");
      localities !== null ? setLocalities(JSON.parse(localities)) : null;
      if (counties && localities) isDataStored = true;
    }

    if (!isDataStored) {
      getCounties().then((data) => {
        window?.localStorage.setItem("counties", JSON.stringify(data));
        setCounties(data);
      });
      getLocalities().then((data) => {
        window?.localStorage.setItem("localities", JSON.stringify(data));
        setLocalities(data);
      });
    }
  }, []);

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset className={styles["fieldset"]}>
        <legend>Adresa</legend>
        <div className={styles["field"]}>
          <label>Adresa 1</label>
          <TextField
            variant="outlined"
            placeholder="Adresa"
            className={styles["input"]}
            {...register("addressLine1", {
              required: "Adresa 1 e obligatorie",
            })}
            id="addressLine1"
          />
          <Error error={errors?.addressLine1} />
        </div>
        <div className={styles["field"]}>
          <label>Adresa 2</label>
          <TextField
            variant="outlined"
            placeholder="Adresa"
            className={styles["input"]}
            {...register("addressLine2")}
            id="addressLine2"
          />
          <Error error={errors?.addressLine2} />
        </div>

        <div className={styles["field"]}>
          <label>Alege localitatea adresei</label>
          <FilterLocalities handleLocalityChange={handleLocalityChange} />
        </div>

        <div className={styles["field"]}>
          <label>Numarul de telefon</label>
          <TextField
            variant="outlined"
            placeholder="Numarul de telefon"
            className={styles["input"]}
            {...register("phoneNumber", {
              required: "Numarul de telefon este obligatoriu!",
              validate: (value) =>
                phoneNumberValidation(value)
                  ? true
                  : "Numar de telefon invalid.",
            })}
            id="phoneNumber"
          />
          <Error error={errors?.phoneNumber} />
        </div>
        <div className={styles["field"]}>
          <label htmlFor="postalCode">Cod postal</label>
          <TextField
            variant="outlined"
            placeholder="Cod postal"
            className={styles["input"]}
            {...register("postalCode", {
              required: "Cod postal",
            })}
            id="postalCode"
          />
          <Error error={errors?.postalCode} />
        </div>
        <div className={styles["button-row"]}>
          <Button
            type="button"
            variant="outlined"
            onClick={handleSubmit(goToPrevious)}
          >
            {"<"} Inapoi
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={handleSubmit(saveData)}
          >
            Urmatorul {">"}
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default Form2;
