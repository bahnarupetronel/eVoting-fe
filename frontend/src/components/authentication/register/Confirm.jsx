import { useForm } from "react-hook-form";
import { useAppState } from "../../../context/form/state";
import { Button, Form, Section, SectionRow } from "./fields/index.js";
import "./form.css";

const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = async (data) => {
    event.preventDefault();
   
    // const form = document.querySelector("form");

    // const errors = getFormErrors(data);
    // if (errors.length === 0) {
    //   const bodyData = data;
    //   delete bodyData.confirmPassword;
    //   const result = await registerUser(data);
    //   if (result.status === 200) {
    //     NotificationManager.success(
    //       " Your registration was successful. You can now log in to your account and start using our services.",
    //       "Successful registration ",
    //       5000
    //     );
    //     navigate("/login");
    //   } else {
    //     NotificationManager.error(
    //       "We're sorry, but your registration was unsuccessful. If you already have an account go and log in.",
    //       "Registration Failed",
    //       5000
    //     );
    //   }
  // }
  console.log("hello")
  };

  return (
    <Form
      onSubmit={handleSubmit(submitData)}
      className="confirm-form-container"
    >
      <Section title="Personal info" url="/register">
        <SectionRow>
          <p className="p-confirm">
            Full name: <span className="state-info">{state.fullName}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Email: <span className="state-info">{state.email}</span>{" "}
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Personal numeric code:{" "}
            <span className="state-info">{state.CNP}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Series and number:{" "}
            <span className="state-info">{state.seriesAndNumber}</span>
          </p>
        </SectionRow>
      </Section>
      <Section title="Form2" url="/register/form2">
        <SectionRow>
          <p className="p-confirm">
            Address line 1: <span className="state-info">{state.address1}</span>{" "}
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Address line 2: <span className="state-info">{state.address2}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Phone number:{" "}
            <span className="state-info">{state.phoneNumber}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Zip/postal code: <span className="state-info">{state.zipCode}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            City: <span className="state-info">{state.city}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            State/Province: <span className="state-info">{state.state}</span>
          </p>
        </SectionRow>
        <SectionRow>
          <p className="p-confirm">
            Country: <span className="state-info">{state.country}</span>
          </p>
        </SectionRow>
      </Section>
      <Section title="Form3" url="/register/form3">
        <SectionRow>
          <p className="p-confirm">
            About me: <span className="state-info">{state.about}</span>
          </p>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};

export default Confirm;
