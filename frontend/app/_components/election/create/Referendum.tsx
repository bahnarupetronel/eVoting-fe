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
        onChange={(e) => handleChange(e, "lawText")}
        className={styles["input-referendum"]}
      />
    </div>
  );
};
export default Referendum;
