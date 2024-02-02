"use client";

import { Button, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";
import styles from "./newCandidate.module.css";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Education = ({ handleEducationChange }: { handleEducationChange }) => {
  const [educations, setEducations] = useState<Array<any>>([
    { faculty: "", promotionYear: "" },
  ]);

  const [date, setDate] = useState(null);

  const handleAddEducation = () => {
    const data = [...educations, { faculty: "", promotionYear: "" }];
    setEducations(data);
    handleEducationChange(data);
  };

  const handleDeleteLastRow = () => {
    if (educations.length > 1) {
      const data = educations.slice(0, -1);
      setEducations(data);
      handleEducationChange(data);
    }
  };

  const handleChange = (index, field, value) => {
    const data = [...educations];
    if (field === "promotionYear") {
      setDate(value);
      data[index][field] = dayjs(value).get("year").toString();
    } else data[index][field] = value;
    setEducations(data);
    handleEducationChange(data);
  };

  return (
    <div>
      <h3 className={styles["title"]}>Educatie</h3>
      <section className={styles["education-container"]}>
        {educations.map((education, index) => (
          <div
            key={index}
            className={styles["education"]}
          >
            <ul className={styles["ul"]}>
              <li className={styles["li"]}>
                <InputLabel
                  htmlFor="position"
                  className={styles["label-event"]}
                >
                  Institutie:
                </InputLabel>
                <Input
                  onChange={(e) =>
                    handleChange(index, "faculty", e.target.value)
                  }
                  className={styles["label-event-name"]}
                />
              </li>
              <li className={styles["li"]}>
                <InputLabel
                  htmlFor="promotionYear"
                  className={styles["label-event"]}
                >
                  Anul promotiei:
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label={"year"}
                      openTo="year"
                      value={date}
                      onChange={(e) => handleChange(index, "promotionYear", e)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </li>
            </ul>
          </div>
        ))}
      </section>

      <Button
        variant="outlined"
        type="button"
        onClick={handleAddEducation}
        className={styles["btn"]}
      >
        Adauga
      </Button>
      {educations.length > 1 && (
        <Button
          variant="outlined"
          type="button"
          color="error"
          className={styles["btn"]}
          onClick={handleDeleteLastRow}
        >
          Sterge
        </Button>
      )}
    </div>
  );
};

export default Education;
