import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function Modal({
  isModalOpen,
  setIsModalOpen,
  handleDeleteEvent,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  handleDeleteEvent: Function;
}) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleApproval = () => {
    handleDeleteEvent();
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
            onClick={handleApproval}
            autoFocus
          >
            Continua
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
