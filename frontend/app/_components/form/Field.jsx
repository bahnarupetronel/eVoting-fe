import React from "react";
import styles from "./form.module.css";

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className={styles["field-container"]}>
      <label
        htmlFor={id}
        className={styles["form-label"]}
      >
        {label}
      </label>
      {children}
      {error && <small className={styles["error"]}>{error.message}</small>}
    </div>
  );
};

// Get id prop from a child element
export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};
