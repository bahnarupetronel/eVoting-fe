import styles from "./select.module.css";

const Select = ({
  name,
  handleChange,
  options,
}: {
  name: string;
  handleChange: Function;
  options: [];
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
        {options &&
          options.map((option, id) => (
            <option
              value={option}
              key={id}
              data-key={id}
            >
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};
export default Select;
