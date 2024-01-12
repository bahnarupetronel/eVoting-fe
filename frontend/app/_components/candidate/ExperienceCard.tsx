import { CardContent, Divider, Typography } from "@mui/material";
import { EducationModel } from "@/_interfaces/education.model";

const ExperienceCard = ({ education }: { education: EducationModel }) => {
  return (
    <CardContent>
      <Typography
        variant="body2"
        component="p"
      >
        {education.faculty}
      </Typography>
      <Typography
        variant="body2"
        component="p"
      >
        Anul absolvirii: {education.promotionYear}
      </Typography>
      <Divider />
    </CardContent>
  );
};
export default ExperienceCard;
