import styles from "./form.module.css";

export const Section = ({ title, children, handleClick }) => {
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h4>{title}</h4>
        <button
          className={styles["btn-edit"]}
          onClick={handleClick}
        >
          Editeaza
        </button>
      </div>
      <div className={styles["content"]}>{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className={styles["section-row"]}>{children}</div>;
};

export default Section;
