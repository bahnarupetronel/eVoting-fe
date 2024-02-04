import styles from "./election.module.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import { option } from "@/_interfaces/filter.model";

const SelectType = ({
  type,
  setType,
  options,
}: {
  type: string;
  setType;
  options: Array<unknown>;
}) => {
  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={styles["select"]}>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
      >
        <Select
          labelId={"event-type"}
          id="filter-select"
          value={type}
          label={"Tip"}
          onChange={(e) => handleChange(e)}
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
    </div>
  );
};
export default SelectType;
