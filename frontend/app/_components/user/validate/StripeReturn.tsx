"use client";

import { useGetVerificationSession } from "@/_hooks/stripe";
import useCookies from "@/_hooks/useCookies";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import { useRouter } from "next/navigation";
import IsSuccessSection from "./IsSuccessSection";
import IsNotVerified from "./IsNotVerified";
import IsProcessingSection from "./IsProcessingSection";
import IsLoadingSection from "./IsLoadingSection";
import FailedSection from "./FailedSection";

const StripeReturn = () => {
  const email = useCookies().getCookie("user");
  const { isLoading, isError, data } = useGetVerificationSession(email);
  const router = useRouter();

  const handleClick = () => {
    router.push(data?.data.url);
  };

  if (isLoading)
    return (
      <div className={globalStyles["container"]}>
        <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
        <IsLoadingSection />
      </div>
    );

  if (isError)
    return (
      <div className={globalStyles["container"]}>
        <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
        <FailedSection handleClick={handleClick} />
      </div>
    );

  return (
    <div className={globalStyles["container"]}>
      <h1 className={globalStyles["title-evoting"]}> eVoting</h1>
      {data?.data.status === "verified" && <IsSuccessSection />}
      {data?.data.status === "processing" && <IsProcessingSection />}
      {data?.data.status !== "verified" &&
        data?.data.status !== "processing" && (
          <IsNotVerified handleClick={handleClick} />
        )}
    </div>
  );
};
export default StripeReturn;
