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
import { usePathname } from "next/navigation";
import styles from "./dropdown.module.css";
import { CandidateModel } from "@/_interfaces/candidate.model";
import { CandidateType } from "@/_interfaces/candidateType.model";
import UserAddressTitle from "./UserAddressTitle";
import { useVoteCandidate } from "@/_hooks/vote";
import { VoteModel } from "@/_interfaces/vote.model";

const ConfirmSelectionModal = ({
  electionType,
  isModalOpen,
  setIsModalOpen,
  candidate,
}: {
  electionType: CandidateType;
  candidate: CandidateModel;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  const pathname = usePathname();
  const electionId: string = pathname.split("/")[2];

  const mutation = useVoteCandidate();

  const vote: VoteModel = {
    electionId: electionId,
    candidateId: candidate?.id,
    candidateTypeId: candidate?.candidateType.id,
  };

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
        Confirmati selectia votului pentru Alegerile{" "}
        {electionType?.electionType.name}
      </DialogTitle>
      <hr className={styles["hr"]} />
      <DialogContent>
        <h3 className={styles["title-modal"]}>
          {candidate?.candidateType?.name + " ->  "}
          <UserAddressTitle electionType={electionType?.electionType} />
        </h3>
        <DialogContentText id="alert-dialog-description">
          Ati ales candidatul {candidate?.name} de la partidul
          {" " + candidate?.politicalParty.name}. Votul nu mai poate fi
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
export default ConfirmSelectionModal;
