import { DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import styles from "./modal.module.css";

export function ResultsModal({
  isModalOpen,
  setIsModalOpen,
  votes,
  election,
  type,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  votes;
  election;
  type: string;
}) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (votes?.length === 0 || !votes) {
    return (
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={styles["modal"]}>
          <h3>Alegeri {election.type.name}</h3>
          <hr className={styles["hr"]} />

          <h4 className={styles["results"]}>Rezultate : </h4>
          <h4>Nu au fost gasiti candidati inregistrati.</h4>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Inchide</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={styles["modal"]}>
        <h3>Alegeri {election.type.name}</h3>
        {type === "county" ? (
          <h4 className={styles["location"]}>{votes[0]?.county}</h4>
        ) : (
          <h4 className={styles["location"]}>
            {votes[0]?.name} / {votes[0]?.county}
          </h4>
        )}

        <hr className={styles["hr"]} />

        <h4 className={styles["results"]}>Rezultate : </h4>
        {votes?.map((vote, index) => {
          return (
            <p key={index}>
              <span className={styles["politicalParty"]}>
                {" "}
                {vote.political_party_name}
              </span>{" "}
              : {vote.votecount} voturi
            </p>
          );
        })}
      </div>
      <Button onClick={handleClose}>Inchide</Button>
    </Dialog>
  );
}

export default ResultsModal;
