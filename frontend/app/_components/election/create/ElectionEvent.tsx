"use client";

import { useEffect, useState } from "react";
import DatePickerMinDate from "../../form/datePicker/DatePickerMinDate";
import styles from "./electionEvent.module.css";
import { getElectionTypes } from "../utils/getElectionTypes";
import Select from "../../form/select/Select";

export const ElectionEvent = () => {
  const [electionTypes, setElectionTypes] = useState(null);
  const [event, setEvent] = useState({
    type: null,
    startDate: null,
    endDate: null,
  });
  const handleTypeChange = (event) => {
    setEvent({ ...event, type: event.target.value });
  };

  const handleStartDateChange = (date) => {
    setEvent({ ...event, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setEvent({ ...event, endDate: date });
  };

  useEffect(() => {
    getElectionTypes().then((data) => setElectionTypes(data));
  }, []);

  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}> Creeaza un nou eveniment</h2>
      <form className={styles["form"]}>
        <Select
          name={"event"}
          handleChange={handleTypeChange}
          types={electionTypes}
        />

        <DatePickerMinDate
          htmlFor={"startDate"}
          labelText={"Selecteaza data si ora de incepere:"}
          handleChange={handleStartDateChange}
          timeInterval={60}
          startDate={event.startDate}
          minDate={-1}
        />
        <DatePickerMinDate
          htmlFor={"endDate"}
          labelText={"Selecteaza data si ora de sfarsit:"}
          handleChange={handleEndDateChange}
          timeInterval={60}
          startDate={event.endDate}
          minDate={-3}
        />
      </form>
    </div>
  );
};
export default ElectionEvent;
