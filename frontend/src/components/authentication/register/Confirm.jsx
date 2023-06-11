import { useForm } from "react-hook-form";
import { useAppState } from "../../../context/form/state";
import {
  Button,
  Form,
  Section,
  SectionRow,
  ImageLink,
} from "./fields/index.js";
import "./form.css";
import getS3UploadLink from "./utils/getS3UploadLink";
import uploadFile from "./utils/uploadFile";
import registerUser from "./utils/registerUser";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";
const Confirm = ({ changeLocation, file }) => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });
  const navigate = useNavigate();
  const submitData = async (data) => {
    event.preventDefault();

    const fileExtenstion = file.name.split(".").pop();
    const result = await getS3UploadLink(fileExtenstion);
    console.log(result);
    if (result.status === 200) {
      let url = await result.text();
      const imageUrl = await uploadFile(url, file);
      state.linkCIPhoto = imageUrl;

      let stateCopy = { ...state };
      delete stateCopy.file;
      delete stateCopy.confirmPassword;

      const userRegisterResponse = await registerUser(stateCopy);
      if (userRegisterResponse.status === 200) {
        NotificationManager.success(
          "Your registration was successful. You can now log in to your account and start using our services. ",
          "Successfully registered. ",
          5000
        );
        navigate("/login");
      } else {
        NotificationManager.error(
          "We're sorry, but your registration was unsuccessful. If you already have an account go and log in.",
          "Registration Failed",
          5000
        );
      }
    }
  };

  const handleClick = (location) => {
    changeLocation(location);
  };

  return (
    <Form
      onSubmit={handleSubmit(submitData)}
      className="confirm-form-container"
    >
      <Section title="Personal info" handleClick={() => handleClick("form1")}>
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
      <Section title="Form2" handleClick={() => handleClick("form2")}>
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
      <Section title="Form3" handleClick={() => handleClick("form3")}>
        <SectionRow>
          <div className="p-confirm">
            File name:{" "}
            {state?.file?.name && (
              <ImageLink imageName={state.file.name} imageUrl="">
                {state.file.name}
              </ImageLink>
            )}
          </div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

export default Confirm;
