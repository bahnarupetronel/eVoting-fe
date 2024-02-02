"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useEffect, useState } from "react";
import { Button, Input, InputLabel, TextareaAutosize } from "@mui/material";
import Filter from "@/_shared/components/Filter";
import { CandidateModel } from "@/_interfaces/candidate.model";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "./newCandidate.module.css";
import DatePicker from "./DatePicker";
import dayjs from "dayjs";
import getS3UploadLink from "@/_shared/utils/getS3UploadLink";
import uploadFile from "@/_shared/utils/uploadFile";
import {
  useGetCandidateType,
  useGetGenders,
  usePostCandidate,
} from "@/_hooks/candidate";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import { locality } from "@/_interfaces/locality.model";
import MuiPhoneNumber from "mui-phone-number";
import { isFormCompleted } from "./isFormCompleted";
import Education from "./Education";
import PoliticalPartyLocalityService from "@/_services/politicalPartyLocality/PoliticalPartyLocalityService";
import { useGetElectionTypes } from "@/_hooks/elections";
import { useRouter } from "next/navigation";

const createOptions = (isSuccess, data, field = "name") => {
  if (!isSuccess) return [];
  let typesArray = [{ value: "", placeholder: "Selectati o varianta" }];
  data.map((type) => {
    typesArray.push({ value: type.id.toString(), placeholder: type[field] });
  });
  return typesArray;
};

const createPoliticalPartyOptions = (data) => {
  let typesArray = [{ value: "", placeholder: "Selectati o varianta" }];
  data.map((politicalParty) => {
    typesArray.push({
      value: politicalParty.politicalParty.id.toString(),
      placeholder: politicalParty.politicalParty.name,
    });
  });
  return typesArray;
};

const NewCandidate = () => {
  const router = useRouter();
  const [candidate, setCandidate] = useState<CandidateModel>();
  const [politicalPartiesOptions, setPoliticalPartiesOptions] = useState([]);
  const [filteredCandidateType, setFilteredCandidateType] = useState([]);
  const [file, setFile] = useState(null);
  const mutation = usePostCandidate();
  const { isSuccess: isGetGendersSucces, data: genders } = useGetGenders();
  const { isSuccess: isGetTypesSuccess, data: electionTypes } =
    useGetElectionTypes();

  const { isSuccess: isGetCandidateTypeSucces, data: candidateType } =
    useGetCandidateType();

  let candidateTypeOptions = createOptions(
    isGetCandidateTypeSucces,
    filteredCandidateType
  );

  let electionTypeOptions = createOptions(
    isGetTypesSuccess,
    electionTypes?.data
  );

  let genderOptions = createOptions(isGetGendersSucces, genders?.data);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setCandidate({ ...candidate, imageUrl: fileUrl });
    }
  };

  const handleEducationChange = (educationList) => {
    setCandidate({ ...candidate, education: educationList });
  };

  const handleChange = (event, field: string) => {
    if (field === "birthDate")
      setCandidate({
        ...candidate,
        [field]: dayjs(event).format("YYYY-MM-DD"),
      });
    else if (field === "phoneNumber")
      setCandidate({ ...candidate, [field]: event });
    else if (field === "eventTypeId")
      setCandidate({
        ...candidate,
        [field]: event.target.value,
        candidateTypeId: "",
      });
    else setCandidate({ ...candidate, [field]: event.target.value });
  };

  const handleLocalityChange = (locality: locality) => {
    setCandidate({
      ...candidate,
      competingInLocality: locality?.id?.toString() || "",
      politicalPartyId: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormCompleted(candidate)) {
      const fileExtenstion = file.name.split(".").pop();
      const result = await getS3UploadLink(fileExtenstion);
      if (200 <= result.status && result.status < 300) {
        let url = await result.data;
        const imageUrl = await uploadFile(url, file);
        const candidateCopy = {
          ...candidate,
          imageUrl: imageUrl,
          gender: genders.data.find((gender) => gender.id == candidate.gender)
            .name,
        };
        setCandidate({ ...candidate, imageUrl: imageUrl });
        mutation.mutate(candidateCopy, {
          onSuccess: () => {
            NotificationManager.success(
              "Candidatul a fost creat cu succes.",
              "",
              5000
            );
            router.push("/admin");
          },
        });
      }
    } else {
      NotificationManager.error(
        "Toate campurile sunt obligatorii.",
        "Eroare.",
        5000
      );
    }
  };

  useEffect(() => {
    if (candidate?.competingInLocality) {
      PoliticalPartyLocalityService.getPoliticalPartiesByLocalityId(
        candidate?.competingInLocality
      ).then((response) => {
        setPoliticalPartiesOptions(createPoliticalPartyOptions(response.data));
      });
    }
  }, [candidate?.competingInLocality]);

  useEffect(() => {
    if (candidate?.eventTypeId) {
      const filtered = candidateType?.data.filter(
        (type) => type.electionType.id == candidate.eventTypeId
      );
      setFilteredCandidateType(filtered);
    }
  }, [candidate?.eventTypeId]);

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
            <MuiPhoneNumber
              onChange={(e) => handleChange(e, "phoneNumber")}
              defaultCountry={"ro"}
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
              onChange={(e) => handleChange(e, "address")}
              placeholder="Introduceti adresa completa:"
              className={styles["label-event-name"]}
            />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="competing_in_locality"
              className={styles["label-event"]}
            >
              Localitatea in care concureaza:
            </InputLabel>
            <FilterLocalities handleLocalityChange={handleLocalityChange} />
          </li>
          <li className={styles["li"]}>
            <InputLabel
              htmlFor="election-type"
              className={styles["label-event"]}
            >
              Selecteaza tipul evenimentelor:
            </InputLabel>
            <Filter
              options={electionTypeOptions}
              value={candidate?.eventTypeId || ""}
              label={"Tip"}
              id={"election-type"}
              handleChange={(e) => handleChange(e, "eventTypeId")}
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
              value={candidate?.candidateTypeId || ""}
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
              value={candidate?.politicalPartyId || ""}
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
              value={candidate?.gender || ""}
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
              value={candidate?.birthDate || ""}
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
          <Education handleEducationChange={handleEducationChange} />
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
