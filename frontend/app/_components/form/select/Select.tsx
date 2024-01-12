import { ElectionType } from "@/_interfaces/electionType.model";
import styles from "./select.module.css";

const Select = ({
  name,
  handleChange,
  types,
}: {
  name: string;
  handleChange: Function;
  types: ElectionType[];
}) => {
  return (
    <div>
      <label htmlFor={name}>Selecteaza tipul:</label>
      <select
        name={name}
        className={styles["select"]}
        placeholder="Selecteaza o varianta!"
        onChange={handleChange}
      >
        <option
          value=""
          disabled
          selected
        >
          Alege o varianta
        </option>
        {types &&
          types.map((option) => (
            <option
              value={option.type}
              key={option.typeId}
              data-key={option.typeId}
            >
              {option.type}
            </option>
          ))}
      </select>
    </div>
  );
};
export default Select;
