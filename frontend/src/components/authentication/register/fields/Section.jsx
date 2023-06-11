import "../form.css";

export const Section = ({ title, children, handleClick }) => {
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h4>{title}</h4>
        <button className={`btn-edit`} onClick={handleClick}>
          Editeaza
        </button>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};

export default Section;
