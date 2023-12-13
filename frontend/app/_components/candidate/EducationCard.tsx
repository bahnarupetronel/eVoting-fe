import { CardContent, Divider, Typography } from "@mui/material";
import { EducationModel } from "../../_interfaces/education.model";

const EducationCard = ({ education }: { education: EducationModel }) => {
  return (
    <CardContent>
      <Typography
        variant="body2"
        component="p"
      >
        Institutie: {education.faculty}
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
export default EducationCard;
