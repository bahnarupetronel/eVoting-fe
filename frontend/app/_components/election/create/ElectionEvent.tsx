"use client";

import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { useEffect, useState } from "react";
import DatePickerMinDate from "./DatePickerMinDate";
import styles from "./electionEvent.module.css";
import Filter from "@/_shared/components/Filter";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { InputLabel, Input, Button } from "@mui/material";
import getElectionTypes from "../utils/getElectionTypes";
import { Event } from "@/_interfaces/event.model";
import submitEvent from "@/_services/election/submitEvent";
import { useRouter } from "next/navigation";
const { format } = require("date-fns");

export const ElectionEvent = () => {
  const router = useRouter();
  const [eventDetails, setEventDetails] = useState<Event>({
    typeId: "",
    startDate: null,
    endDate: null,
    description: "",
    title: "",
  });
  const [filterTypes, setFilterTypes] = useState([]);
  const [types, setTypes] = useState([]);
  const handleChange = (event, field: string): void => {
    setEventDetails({ ...eventDetails, [field]: event.target?.value || event });
  };

  const handleTypeChange = (event, id?: number): void => {
    setEventDetails({ ...eventDetails, typeId: event.target.value });
  };

  const getEventName = (id: string): string => {
    return id ? types.filter((type) => type.id == id)[0].name : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const event = { ...eventDetails, startDate: "", endDate: "" };
      event.startDate = format(eventDetails.startDate, "yyyy-MM-dd'T'HH:mm", {
        timeZone: "Europe/Bucharest",
      });
      event.endDate = format(eventDetails.endDate, "yyyy-MM-dd'T'HH:mm", {
        timeZone: "Europe/Bucharest",
      });
      const response = await submitEvent(event);
      if (response.status === 200) {
        NotificationManager.success(
          "Felicitari! Evenimentul a fost creat!",
          "Evenimentul a fost creat cu succes!",
          5000
        );
        router.push(`/election/${response.data}`);
      } else {
        NotificationManager.error(
          "Ne pare rau, ceva nu a functionat corect. Incearca din nou",
          "Crearea evenimentului a esuat",
          5000
        );
      }
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    let typesArray = [{ value: "", placeholder: "Selectati tipul" }];
    getElectionTypes().then((data) => {
      setTypes(data);
      data.map((type) => {
        typesArray.push({ value: type.id.toString(), placeholder: type.name });
      });
      setFilterTypes(typesArray);
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}> Creeaza un nou eveniment</h2>
      <form
        className={styles["flex"]}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <InputLabel
            htmlFor="name"
            className={styles["label-event"]}
          >
            Numele evenimentului:
          </InputLabel>
          <Input
            onChange={(e) => handleChange(e, "title")}
            placeholder="Introduceti numele evenimentului"
            className={styles["label-event-name"]}
          />
        </div>

        <div>
          <InputLabel
            htmlFor="tip"
            className={styles["label-event"]}
          >
            Selecteaza tipul:
          </InputLabel>
          <Filter
            options={filterTypes}
            value={eventDetails.typeId}
            label={"Tip"}
            id={"type"}
            handleChange={handleTypeChange}
            size="small"
          />
        </div>

        <DatePickerMinDate
          htmlFor={"startDate"}
          labelText={"Selecteaza data si ora de incepere:"}
          handleChange={(e) => handleChange(e, "startDate")}
          timeInterval={60}
          startDate={eventDetails.startDate}
          minDate={-1}
        />
        <DatePickerMinDate
          htmlFor={"endDate"}
          labelText={"Selecteaza data si ora de sfarsit:"}
          handleChange={(e) => handleChange(e, "endDate")}
          timeInterval={60}
          startDate={eventDetails.endDate}
          minDate={-3}
        />
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
        {/* <EventFactory
          type={getEventName(eventDetails.typeId)}
          handleChange={handleChange}
        /> */}
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
export default ElectionEvent;
