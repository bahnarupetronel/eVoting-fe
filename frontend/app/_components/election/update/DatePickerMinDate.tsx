import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { subDays } from "date-fns";
import { InputLabel } from "@mui/material";
import styles from "./electionEvent.module.css";

const DatePickerMinDate = ({
  startDate,
  timeInterval,
  handleChange,
  minDate,
  htmlFor,
  labelText,
}: {
  startDate: Date;
  timeInterval: number;
  handleChange: Function;
  minDate: number;
  htmlFor: string;
  labelText: string;
}) => {
  return (
    <div>
      <InputLabel
        htmlFor={htmlFor}
        className={styles["label-event"]}
      >
        {labelText}
      </InputLabel>
      <DatePicker
        showIcon
        selected={startDate}
        showTimeSelect
        showWeekNumbers
        timeFormat="p"
        timeIntervals={timeInterval}
        dateFormat="Pp"
        minDate={subDays(new Date(), minDate)}
        closeOnScroll={true}
        onChange={(date) => handleChange(date)}
      />
    </div>
  );
};
export default DatePickerMinDate;
