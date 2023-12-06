import { forwardRef } from "react";
import styles from "./form.module.css";

export const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={styles["form-input"]}
      {...props}
    />
  );
});

export default Input;
