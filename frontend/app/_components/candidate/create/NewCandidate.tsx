"use client";

import { useState } from "react";
import { Button, Input, InputLabel, TextareaAutosize } from "@mui/material";
import Filter from "@/_shared/components/Filter";
import { CandidateModel } from "@/_interfaces/candidate.model";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "./candidate.module.css";
import DatePicker from "./DatePicker";
import dayjs from "dayjs";
import getS3UploadLink from "@/_shared/utils/getS3UploadLink";
import uploadFile from "@/_shared/utils/uploadFile";
import { useGetCandidateType, useGetGenders } from "@/_hooks/candidate";
import { useGetPoliticalParties } from "@/_hooks/politicalParties";

const createOptions = (data, field = "name") => {
  let typesArray = [{ value: "", placeholder: "Selectati o varianta" }];
  data.map((type) => {
    typesArray.push({ value: type.id.toString(), placeholder: type[field] });
  });
  return typesArray;
};

const NewCandidate = () => {
  const { isSuccess: isGetGendersSucces, data: genders } = useGetGenders();
  const { isSuccess: isGetCandidateTypeSucces, data: candidateType } =
    useGetCandidateType();
  const { isSuccess: isGetPoliticalPartiesSucces, data: politicalParties } =
    useGetPoliticalParties();
  const [file, setFile] = useState(null);
  let candidateTypeOptions = [];
  let genderOptions = [];
  let politicalPartiesOptions = [];
  const [candidate, setCandidate] = useState({
    candidateTypeId: "",
    gender: "",
    birthDate: null,
    image_url: "",
    politicalPartyId: "",
  });

  if (isGetCandidateTypeSucces)
    candidateTypeOptions = createOptions(candidateType.data);
  if (isGetGendersSucces) genderOptions = createOptions(genders.data);
  if (isGetPoliticalPartiesSucces)
    politicalPartiesOptions = createOptions(politicalParties.data);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      console.log(fileUrl);
      setCandidate({ ...candidate, image_url: fileUrl });
    }
  };

  const handleChange = (event, field: string): void => {
    if (field === "birthDate")
      setCandidate({
        ...candidate,
        [field]: dayjs(event).format("YYYY-MM-DD"),
      });
    else setCandidate({ ...candidate, [field]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileExtenstion = file.name.split(".").pop();
    const result = await getS3UploadLink(fileExtenstion);
    if (200 <= result.status && result.status < 300) {
      let url = await result.text();
      const imageUrl = await uploadFile(url, file);
      setCandidate({ ...candidate, image_url: imageUrl });
    }
  };

  return (
    <div className={globalStyles["container"]}>
      <h2 className={styles["title"]}>Adauga un nou candidat</h2>
      <form
        className={styles["flex"]}
        onSubmit={(e) => handleSubmit(e)}
      >
        <ul className={styles["ul"]}>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="name"
              className={styles["label-event"]}
            >
              Numele candidatului:
            </InputLabel>
            <Input
              onChange={(e) => handleChange(e, "name")}
              placeholder="Introduceti numele candidatului"
              className={styles["label-event-name"]}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="email"
              className={styles["label-event"]}
            >
              Adresa de email a candidatului:
            </InputLabel>
            <Input
              onChange={(e) => handleChange(e, "email")}
              placeholder="Introduceti adresa de email a candidatului"
              className={styles["label-event-name"]}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="position"
              className={styles["label-event"]}
            >
              Pozitia in partid:
            </InputLabel>
            <Input
              onChange={(e) => handleChange(e, "position")}
              placeholder="Ex: Membru, Presedinte, etc."
              className={styles["label-event-name"]}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="phoneNumber"
              className={styles["label-event"]}
            >
              Numarul de telefon:
            </InputLabel>
            <Input
              onChange={(e) => handleChange(e, "phoneNumber")}
              placeholder="Introduceti numarul de telefon:"
              className={styles["label-event-name"]}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="residence"
              className={styles["label-event"]}
            >
              Adresa completa:
            </InputLabel>
            <Input
              onChange={(e) => handleChange(e, "residence")}
              placeholder="Introduceti adresa completa:"
              className={styles["label-event-name"]}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="tip"
              className={styles["label-event"]}
            >
              Selecteaza tipul:
            </InputLabel>
            <Filter
              options={candidateTypeOptions}
              value={candidate.candidateTypeId}
              label={"Tip"}
              id={"type"}
              handleChange={(e) => handleChange(e, "candidateTypeId")}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="politicalParty"
              className={styles["label-event"]}
            >
              Selecteaza partidul politic:
            </InputLabel>
            <Filter
              options={politicalPartiesOptions}
              value={candidate.politicalPartyId}
              label={"Partid politic"}
              id={"politicalParty"}
              handleChange={(e) => handleChange(e, "politicalPartyId")}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="gender"
              className={styles["label-event"]}
            >
              Selecteaza genul:
            </InputLabel>
            <Filter
              options={genderOptions}
              value={candidate.gender}
              label={"Gen"}
              id={"gender"}
              handleChange={(e) => handleChange(e, "gender")}
            />
          </li>
          <li className={`${styles["date-picker"]} ${styles["li"]}`}>
            <InputLabel
              htmlFor={"birthDate"}
              className={styles["label-event"]}
            >
              Data de nastere:
            </InputLabel>
            <DatePicker
              value={candidate.birthDate}
              handleChange={(e) => handleChange(e, "birthDate")}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="description"
              className={styles["label-event"]}
            >
              Descriere :
            </InputLabel>
            <TextareaAutosize
              onChange={(e) => handleChange(e, "description")}
              className={styles["textarea"]}
              aria-label="minimum height"
              minRows={3}
              placeholder="Introduceti o descriere"
            />
          </li>
          <li className={styles["li"]}>
            <fieldset className={styles["fieldset"]}>
              <legend>Adauga poza de profil</legend>
              <input
                type="file"
                onChange={handleFileChange}
              />

              <div>{file && `${file.name} - ${file.type}`}</div>
            </fieldset>
          </li>
        </ul>

        <Button
          variant="outlined"
          type="submit"
          className={styles["btn-submit"]}
        >
          Creeaza
        </Button>
      </form>
    </div>
  );
};
export default NewCandidate;
