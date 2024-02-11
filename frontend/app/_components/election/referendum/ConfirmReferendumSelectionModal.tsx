import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import styles from "./referendumModal.module.css";
import { useVoteReferendum } from "@/_hooks/voteReferendum";
import { ReferendumVoteModel } from "@/_interfaces/referendumVoteModel";
import { ReferendumOptionModel } from "@/_interfaces/referendumOption.model";

const ConfirmReferendumSelectionModal = ({
  isModalOpen,
  setIsModalOpen,
  option,
  vote,
}: {
  option: ReferendumOptionModel;
  isModalOpen: boolean;
  setIsModalOpen: Function;
  vote: ReferendumVoteModel;
}) => {
  const mutation = useVoteReferendum();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmitVote = () => {
    mutation.mutate(vote, {
      onSuccess: () => {
        NotificationManager.success(
          "Votul a fost inregistrat. Va multumim!",
          "",
          5000
        );
      },
      onError: () => {
        NotificationManager.error(
          "Ceva nu a functionat! Votul nu a fost inregistrat! Reincercati mai tarziu!",
          "Eroare",
          5000
        );
      },
    });

    handleClose();
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Confirmati selectia votului
      </DialogTitle>
      <hr className={styles["hr"]} />
      <DialogContent>
        <h3 className={styles["title-modal"]}>Referendum</h3>
        <DialogContentText id="alert-dialog-description">
          Ati ales varianta {option?.optionName}. Votul nu mai poate fi
          schimbat. Trimiteti mai departe?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          type="button"
          onClick={handleClose}
        >
          Anuleaza
        </Button>
        <Button
          type="button"
          onClick={handleSubmitVote}
          autoFocus
        >
          Voteaza
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmReferendumSelectionModal;
