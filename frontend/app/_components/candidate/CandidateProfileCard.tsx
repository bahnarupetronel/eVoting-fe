import { Divider, Typography, CardContent } from "@mui/material";
import { CandidateModel } from "@/_interfaces/candidate.model";
import Image from "next/image";
import styles from "./candidate.module.css";

export const CandidateProfileCard = ({
  candidate,
}: {
  candidate: CandidateModel;
}) => {
  return (
    <div className={styles["container-profile-details"]}>
      <Image
        width={300}
        height={300}
        alt="candidate image"
        className={styles["image-avatar"]}
        priority
        src={candidate.imageUrl}
      />
      <CardContent className={styles["card-content"]}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles["title"]}
        >
          {candidate.name}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className={`${styles["title"]} ${styles["title-position"]}`}
        >
          {candidate.position}
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          className={styles["p-details"]}
        >
          Partid:{" "}
          <span className={styles["span-details"]}>
            {candidate.politicalPartyId}
          </span>
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          className={styles["p-details"]}
        >
          Adresa:{" "}
          <span className={styles["span-details"]}>{candidate.address}</span>
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          className={styles["p-details"]}
        >
          Adresa de email:{" "}
          <span className={styles["span-details"]}>{candidate.email}</span>
        </Typography>
        <Divider />
        <Typography variant="body1">
          <span className={styles["span-description"]}>
            {candidate.description}
          </span>
        </Typography>
      </CardContent>
    </div>
  );
};

export default CandidateProfileCard;
