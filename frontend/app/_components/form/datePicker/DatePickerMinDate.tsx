import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { subDays } from "date-fns";

const DatePickerMinDate = ({
  startDate,
  timeInterval,
  handleChange,
  minDate,
  htmlFor,
  labelText,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{labelText}</label>
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
