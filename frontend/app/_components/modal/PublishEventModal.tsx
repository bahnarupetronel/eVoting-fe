import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { usePublishEvent } from "@/_hooks/elections";
import { ElectionModel } from "@/_interfaces/election.model";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";

export function PublishEventModal({
  election,
  isModalOpen,
  setIsModalOpen,
}: {
  election: ElectionModel;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) {
  const router = useRouter();
  const mutation = usePublishEvent();

  const handlePublishEvent = async () => {
    mutation.mutate(election.electionId, {
      onSuccess: () => {
        NotificationManager.success(
          "Evenimentul a fost publicat cu succes. ",
          "",
          5000
        );
        router.push("/admin/election/unpublished");
      },
      onError: () => {
        NotificationManager.error(
          "Evenimentul nu a putut fi publicat. Incercati din nou mai tarziu!",
          "",
          5000
        );
      },
    });
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Publicati evenimentul?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Evenimentul va fi publicat. Acesta poate fi sters si dupa publicare.
            Continuati?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuleaza</Button>
          <Button
            onClick={handlePublishEvent}
            autoFocus
          >
            Continua
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PublishEventModal;
