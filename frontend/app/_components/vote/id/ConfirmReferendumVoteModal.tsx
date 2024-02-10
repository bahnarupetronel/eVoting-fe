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
import styles from "./dropdown.module.css";
import { CandidateType } from "@/_interfaces/candidateType.model";
import UserAddressTitle from "./UserAddressTitle";
import { useVoteCandidate } from "@/_hooks/vote";
import { VoteReferendumModel } from "@/_interfaces/voteReferendum.model";
import { ReferendmOptionModel } from "@/_interfaces/referendumOption.model";

const ConfirmReferendumVoteModal = ({
  electionType,
  isModalOpen,
  setIsModalOpen,
  option,
  vote,
}: {
  electionType: CandidateType;
  option: ReferendmOptionModel;
  isModalOpen: boolean;
  setIsModalOpen: Function;
  vote: VoteReferendumModel;
}) => {
  const mutation = useVoteCandidate();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmitVote = () => {
    //   mutation.mutate(vote, {
    //     onSuccess: () => {
    //       NotificationManager.success(
    //         "Votul a fost inregistrat. Va multumim!",
    //         "",
    //         5000
    //       );
    //     },
    //     onError: () => {
    //       NotificationManager.error(
    //         "Ceva nu a functionat! Votul nu a fost inregistrat! Reincercati mai tarziu!",
    //         "Eroare",
    //         5000
    //       );
    //     },
    //   });

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
        Confirmati selectia votului pentru Referendum
      </DialogTitle>
      <hr className={styles["hr"]} />
      <DialogContent>
        <h3 className={styles["title-modal"]}>
          <UserAddressTitle electionType={electionType?.electionType} />
        </h3>
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
export default ConfirmReferendumVoteModal;
