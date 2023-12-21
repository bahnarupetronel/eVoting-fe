import { InputLabel, Input } from "@mui/material";
import styles from "./electionEvent.module.css";
import { TextareaAutosize } from "@mui/base";

const Referendum = ({ handleChange }: { handleChange: Function }) => {
  return (
    <div className={styles["flex"]}>
      <h3>Detalii referendum</h3>
      <InputLabel htmlFor="name">Textul de lege al referendumului:</InputLabel>
      <Input
        placeholder="Introduceti textul de lege"
        onChange={(e) => handleChange(e, "refendum-question")}
        className={styles["input-referendum"]}
      />

      <InputLabel
        htmlFor="name"
        className={styles["label-event"]}
      >
        Scop:
      </InputLabel>
      <TextareaAutosize
        onChange={(e) => handleChange(e, "referendum-description")}
        className={styles["textarea"]}
        aria-label="minimum height"
        minRows={3}
        placeholder="Introduceti scopul referendumului"
      />
    </div>
  );
};
export default Referendum;
