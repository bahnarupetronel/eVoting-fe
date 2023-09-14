import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./home.module.css";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export default function InfoCard({ props }) {
  return (
    <Card
      className={styles["card"]}
      sx={{ boxShadow: 4 }}
    >
      <Link href={props.href}>
        <CardMedia
          sx={{ height: 150 }}
          image={props.iconSrc}
          title={props.imageAlt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
