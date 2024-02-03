"use client";

import { useState } from "react";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { UserDetailsModel } from "@/_interfaces/userDetails.model";
import styles from "./modal.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  Input,
  InputLabel,
} from "@mui/material";
import FilterLocalities from "@/_shared/components/FilterLocalities";
import { locality } from "@/_interfaces/locality.model";
import { isEmailValid, errors } from "@/_components/form/utils/validateForm";
import { isCNPValid } from "@/_components/form/utils/validateCNP";
import { usePostUserDetails } from "@/_hooks/user";
import { isFormValid } from "./isFormValid";
import { userDetailsEdit } from "@/_interfaces/userDetailsEdit.model";
import { useRouter } from "next/navigation";

export const EditProfileModal = ({
  user,
  handleCloseModal,
  isModalOpen,
}: {
  user: UserDetailsModel;
  handleCloseModal: Function;
  isModalOpen: boolean;
}) => {
  const router = useRouter();
  const [userCopy, setUserCopy] = useState<userDetailsEdit>(user);
  const mutation = usePostUserDetails();

  const handleChange = (event, field: string) => {
    setUserCopy({ ...userCopy, [field]: event.target.value });
  };

  const handleLocalityChange = (locality: locality) => {
    setUserCopy({ ...userCopy, ["localityId"]: locality.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(userCopy)) {
      mutation.mutate(userCopy, {
        onSuccess: () => {
          NotificationManager.success("Detaliile au fost salvate", "", 5000);
          handleCloseModal();
          router.refresh();
        },
        onError: () => {
          NotificationManager.error(
            "Ceva nu a functionat! Incearca mai tarziu!",
            "",
            5000
          );
        },
      });
    }
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => handleCloseModal()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={styles["dialog"]}
    >
      <main className={styles["container"]}>
        <h2
          id="alert-dialog-title"
          className={styles["title"]}
        >
          Editeaza profilul
        </h2>
        <hr className={styles["hr"]} />

        <form>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="name"
              className={styles["input-label"]}
            >
              Numele candidatului:
            </InputLabel>
            <Input
              value={userCopy?.name ?? ""}
              onChange={(e) => handleChange(e, "name")}
              placeholder="Nume"
              className={styles["input"]}
            />
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="name"
              className={styles["input-label"]}
            >
              Adresa de email:
            </InputLabel>
            <Input
              value={userCopy?.email ?? ""}
              onChange={(e) => handleChange(e, "email")}
              placeholder="Email"
              className={styles["input"]}
            />
            {userCopy?.email.length > 0 && !isEmailValid(userCopy?.email) && (
              <p className={styles["error"]}>{errors["invalid-email"]}</p>
            )}
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="cnp"
              className={styles["input-label"]}
            >
              CNP:
            </InputLabel>
            <Input
              value={userCopy?.cnp ?? ""}
              onChange={(e) => handleChange(e, "cnp")}
              placeholder="Cnp"
              className={styles["input"]}
            />
            {userCopy?.cnp.length > 0 && !isCNPValid(userCopy?.cnp) && (
              <p className={styles["error"]}>{errors["invalid-cnp"]}</p>
            )}
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="seriesAndNumber"
              className={styles["input-label"]}
            >
              Seria si numarul:
            </InputLabel>
            <Input
              value={userCopy?.seriesAndNumber ?? ""}
              onChange={(e) => handleChange(e, "seriesAndNumber")}
              placeholder="Seria si numarul"
              className={styles["input"]}
            />
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="phoneNumber"
              className={styles["input-label"]}
            >
              Numarul de telefon:
            </InputLabel>
            <Input
              value={userCopy?.phoneNumber ?? ""}
              onChange={(e) => handleChange(e, "phoneNumber")}
              placeholder="Numarul de telefon"
              className={styles["input"]}
            />
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="addressLine1"
              className={styles["input-label"]}
            >
              Adresa 1:
            </InputLabel>
            <Input
              value={userCopy?.addressLine1 ?? ""}
              onChange={(e) => handleChange(e, "addressLine1")}
              placeholder="Adresa 1"
              className={styles["input"]}
            />
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="addressLine2"
              className={styles["input-label"]}
            >
              Adresa 2:
            </InputLabel>
            <Input
              value={userCopy?.addressLine2 ?? ""}
              onChange={(e) => handleChange(e, "addressLine2")}
              placeholder="Adresa 2"
              className={styles["input"]}
            />
          </div>
          <div className={styles["field"]}>
            <InputLabel
              htmlFor="postalCode"
              className={styles["input-label"]}
            >
              Cod postal:
            </InputLabel>
            <Input
              value={userCopy?.postalCode ?? ""}
              onChange={(e) => handleChange(e, "postalCode")}
              placeholder="Cod postal"
              className={styles["input"]}
            />
          </div>
          <FilterLocalities handleLocalityChange={handleLocalityChange} />
        </form>
        <DialogActions>
          <Button
            type="button"
            onClick={() => handleCloseModal()}
          >
            Anuleaza
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            autoFocus
          >
            Salveaza
          </Button>
        </DialogActions>
      </main>
    </Dialog>
  );
};
export default EditProfileModal;
function userRouter() {
  throw new Error("Function not implemented.");
}
