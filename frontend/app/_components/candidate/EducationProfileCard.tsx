import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CandidateModel } from "@/_interfaces/candidate.model";
import { EducationModel } from "@/_interfaces/education.model";
import EducationCard from "./EducationCard";
import styles from "./candidate.module.css";

export const EducationProfileCard = ({
  candidate,
}: {
  candidate: CandidateModel;
}) => {
  const educations = candidate.education.sort(
    (a: EducationModel, b: EducationModel) => a.promotionYear > b.promotionYear
  );
  return (
    <div className={styles["container-profile-education"]}>
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          className={styles["title"]}
        >
          Educatie
        </Typography>
        {educations.map((education: EducationModel) => (
          <EducationCard education={education} />
        ))}
      </CardContent>
      <CardContent>
        <Typography
          variant="h6"
          color="text.secondary"
          className={styles["title"]}
        >
          Experienta
        </Typography>
        {educations.map((education: EducationModel) => (
          <EducationCard education={education} />
        ))}
      </CardContent>
    </div>
  );
};

export default EducationProfileCard;
