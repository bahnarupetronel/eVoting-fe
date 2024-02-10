import styles from "@/_shared/stylesheets/auth.module.css";

const Error = ({ error }) => {
  if (error)
    return (
      <span className={styles["field-error"]}>{error?.message.toString()}</span>
    );
  return <></>;
};
export default Error;
