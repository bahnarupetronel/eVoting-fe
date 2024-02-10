"use client";

import { useCreateVerificationSession } from "@/_hooks/stripe";
import useCookies from "@/_hooks/useCookies";
import { Button } from "@mui/material";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import styles from "../user.module.css";
import { useRouter } from "next/navigation";
import { useGetUserDetails } from "@/_hooks/user";
import { UserDetailsModel } from "@/_interfaces/userDetails.model";
import IsErrorSection from "./IsErrorSection";
import { useState } from "react";
import FailedSection from "./FailedSection";

const Stripe = () => {
  const email = useCookies().getCookie("user");
  const { data: data } = useGetUserDetails(email);
  const userDetails: UserDetailsModel = data?.data;
  const [status, setStatus] = useState(null);
  const mutation = useCreateVerificationSession();
  const router = useRouter();

  const handleClick = () => {
    mutation.mutate(email, {
      onSuccess: (response) => {
        console.log(response.data);
        const sessionUrl = response.data.url;
        router.push(sessionUrl);
      },
      onError: (response) => {
        console.log(response);
        setStatus(response);
      },
    });
  };

  const refreshPage = () => {
    router.refresh();
  };

  if (status) {
    <div className={globalStyles["container"]}>
      <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
      <FailedSection handleClick={refreshPage} />
    </div>;
  }

  if (userDetails?.isIdentityVerified) {
    return (
      <div className={globalStyles["container"]}>
        <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
        <IsErrorSection handleClick={refreshPage} />
      </div>
    );
  }

  return (
    <div className={globalStyles["container"]}>
      <h2 className={styles["title"]}> Verificare identitate</h2>
      <h3>Informatii:</h3>
      <p>
        Dupa ce apasati butonul, va fi deschis un nou link catre Stripe
        Identity. Urmati pasii de pe urmatoarele pagini pentru verificarea
        identitatii.
      </p>
      <p>
        Pentru a incepe verificarea apasati urmatorul buton:{" "}
        <Button
          variant="outlined"
          onClick={handleClick}
        >
          Start
        </Button>
      </p>
    </div>
  );
};
export default Stripe;
