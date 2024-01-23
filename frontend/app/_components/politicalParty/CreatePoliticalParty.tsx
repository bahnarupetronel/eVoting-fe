"use client";

import postPoliticalParty from "@/_services/politicalParty/postPoliticalParty";
import { InputLabel, Input, FormControl, Button } from "@mui/material";
import { useState } from "react";
import globalStyles from "@/_shared/stylesheets/App.module.css";

export const CreatePoliticalPart = () => {
  const [name, setName] = useState<string>("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log("preventing");
    console.log(name);
    if (name) postPoliticalParty(name);
  };
  return (
    <div className={globalStyles["container"]}>
      <p>Creeaza un nou partid politic:</p>
      <FormControl variant="outlined">
        <InputLabel htmlFor="my-input">Nume</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type="submit"
          variant="outlined"
          onClick={handleClick}
        >
          Creeaza
        </Button>
      </FormControl>
    </div>
  );
};
export default CreatePoliticalPart;
