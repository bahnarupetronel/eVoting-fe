import Link from "next/link";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./home.module.css";

export default function InfoCard({ props }) {
  return (
    <div
      className={styles["card"]}
      sx={{ boxShadow: 4 }}
    >
      <Link
        href={props.href}
        className={styles["card-link"]}
      >
        <Image
          className={styles["image-card"]}
          width="200"
          height="200"
          sizes="(min-width: 200px) 100%"
          src={props.iconSrc}
          alt={props.imageAlt}
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
    </div>
  );
}
