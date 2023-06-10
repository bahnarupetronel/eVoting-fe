import { Link } from "react-router-dom";
import "../form.css";

export const Section = ({ title, children, url }) => {
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h4>{title}</h4>
        <Link className={`btn-edit`} to={url}>
          Edit
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};

export default Section;
