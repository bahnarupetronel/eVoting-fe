import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "../election.module.css";
import { option } from "./getFilterOptions";

const Filter = ({
  options,
  value,
  label,
  id,
  handleChange,
}: {
  options: Array<option>;
  value: string;
  label: string;
  id: string;
  handleChange;
}) => {
  return (
    <FormControl className={styles["filter"]}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id="filter-select"
        value={value}
        label={label}
        onChange={(e) => handleChange(e, id)}
      >
        {options.map((option: option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.placeholder}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Filter;
