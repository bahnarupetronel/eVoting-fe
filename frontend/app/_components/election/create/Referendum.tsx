import { InputLabel, Input } from "@mui/material";
import styles from "./electionEvent.module.css";

const Referendum = ({ handleChange }: { handleChange: Function }) => {
  return (
    <div className={styles["flex"]}>
      <h3>Detalii referendum</h3>
      <InputLabel htmlFor="name">Legea curenta:</InputLabel>
      <Input
        placeholder="Introduceti legea:"
        onChange={(e) => handleChange(e, "lawText")}
        className={styles["input-referendum"]}
      />

      <InputLabel htmlFor="name">Noua lege propusa:</InputLabel>
      <Input
        placeholder="Introduceti legea propusa:"
        onChange={(e) => handleChange(e, "proposedLawText")}
        className={styles["input-referendum"]}
      />
    </div>
  );
};
export default Referendum;
