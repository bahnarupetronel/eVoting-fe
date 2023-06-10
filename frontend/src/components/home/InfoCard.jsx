import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./home.module.css";
import { CardActionArea } from "@mui/material";

export default function InfoCard({ props }) {
  return (
    <Card className={styles["card"]} sx={{ boxShadow: 4 }}>
      <CardActionArea href={props.href} target={props.target}>
        <CardMedia
          sx={{ height: 150 }}
          image={props.icon}
          title={props.imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
