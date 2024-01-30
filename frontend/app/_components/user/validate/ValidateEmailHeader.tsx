import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import { Button } from "@mui/material";
import styles from "../user.module.css";
import WarningIcon from "@mui/icons-material/Warning";
import Link from "next/link";
import { useIsConfirmEmailSent, useSendValidationEmail } from "@/_hooks/user";
import { useState } from "react";

const ValidateEmailHeader = ({ email }: { email: string }) => {
  const { isLoading, data: emailExists } = useIsConfirmEmailSent(email);
  const mutation = useSendValidationEmail();
  const [isEmailSentSuccesfully, setIsEmailSentSuccesfully] = useState(false);
  const handleClick = () => {
    mutation.mutate(email, {
      onSuccess: () => {
        setIsEmailSentSuccesfully(true);
        NotificationManager.success(
          "Verifica adresa de email pentru confirmarea contului.",
          "Email-ul a fost trimis.",
          3000
        );
      },
    });
  };

  if (isLoading) return <div></div>;
  return (
    <header className={styles["header-validate"]}>
      <section className={styles["section-header"]}>
        <WarningIcon />
        <div>
          <p className={styles["p-warning"]}>Verifica adresa de email!</p>
          {emailExists?.data || isEmailSentSuccesfully ? (
            <p className={styles["p-warning"]}>
              {" "}
              Acceseaza{" "}
              <Link
                className={styles["link-validation"]}
                href="https://www.gmail.com"
                target="blank"
              >
                gmail.com
              </Link>{" "}
              pentru a confirma adresa de email {email}.
            </p>
          ) : (
            <p className={styles["p-warning"]}>
              Apasa pe <span className={styles["span-btn"]}>Trimite email</span>{" "}
              pentru a primi email-ul de confirmare.
            </p>
          )}
        </div>
      </section>

      <Button
        variant="outlined"
        color="warning"
        className={styles["btn-resend"]}
        onClick={handleClick}
      >
        {emailExists?.data || isEmailSentSuccesfully
          ? "Retrimite email-ul"
          : "Trimite email"}
      </Button>
    </header>
  );
};
export default ValidateEmailHeader;
