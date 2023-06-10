import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../../../context/form/state";
import { Button, Form, Field } from "./fields/index.js";

const Form3 = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/register/confirm");
  };

  const goToPrevious = (data) => {
    data ? setState({ ...state, ...data }) : console.log("no update");
    navigate("/register/form2");
  };
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Add CI photo</legend>
        <Field label="About me*">
          <textarea
            {...register("about")}
            id="about"
            className="form-control"
          />
        </Field>
        <div className="button-row">
          <Button onClick={handleSubmit(goToPrevious)}>{"<"} Previous</Button>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default Form3;
