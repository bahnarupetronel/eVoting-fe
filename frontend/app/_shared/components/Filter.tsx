import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { option } from "@/_interfaces/filter.model";
import styles from "./filter.module.css";

const Filter = ({
  options,
  value,
  label,
  id,
  handleChange,
  size,
}: {
  options: Array<option>;
  value: string;
  label: string;
  id: string;
  handleChange;
  size?: string;
}) => {
  return (
    <FormControl
      className={styles["filter"]}
      size={size ?? "default"}
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id="filter-select"
        value={value}
        label={label}
        onChange={(e) => handleChange(e, id)}
      >
        {options.length > 0 &&
          options.map((option: option) => (
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
