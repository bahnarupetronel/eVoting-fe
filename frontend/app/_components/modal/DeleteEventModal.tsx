import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { ElectionModel } from "@/_interfaces/election.model";
import deleteElection from "@/_services/election/deleteElection";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/navigation";

export function DeleteEventModal({
  isModalOpen,
  setIsModalOpen,
  election,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  election: ElectionModel;
}) {
  const router = useRouter();
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteEvent = async () => {
    const response = await deleteElection(election?.electionId);
    if (200 <= response.status && response.status < 300) {
      NotificationManager.success(
        "Evenimentul a fost sters cu succes. Sunteti redirectat catre pagina de evenimenete.",
        "Eveniment sters.",
        5000
      );
      router.push("/admin/election/unpublished");
    } else {
      NotificationManager.error(
        "Evenimentul nu a putut fi sters. Incercati din nou mai tarziu!",
        "Eveniment nu a putut fi sters.",
        5000
      );
    }
    setIsModalOpen(false);
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Doriti sa stergeti acest eveniment?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Stergerea acestui eveniment este ireversibila.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Anuleaza</Button>
        <Button
          onClick={handleDeleteEvent}
          autoFocus
        >
          Continua
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteEventModal;
