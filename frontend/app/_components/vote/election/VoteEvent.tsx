"use client";

import { usePathname } from "next/navigation";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import ElectionTitle from "@/_components/election/ElectionTitle";
import { useGetElectionAndTypes } from "@/_hooks/elections";
import DropdownTypes from "./DropdownTypes";
import UserAddressTitle from "./UserAddressTitle";
import { useGetIsUserAllowedToVote } from "@/_hooks/user";
import HeaderUserNotAllowedToVote from "./HeaderUserNotAllowedToVote";
import NotFoundPage from "@/_components/notFound/NotFoundPage";

const VoteEvent = () => {
  const pathname = usePathname();
  const electionId: string = pathname.split("/")[2];
  const route: string = pathname.split("/")[1];

  const { isSuccess, isLoading, isError, data } =
    useGetElectionAndTypes(electionId);

  const { isSuccess: isSuccesIsUserAllowed, data: isUserAllowedToVote } =
    useGetIsUserAllowedToVote();

  if (isLoading) {
    return <div>Se incarca...</div>;
  }

  if (route === "vote" && !data?.data.election.published) {
    return <NotFoundPage />;
  }

  return (
    <div className={globalStyles["container"]}>
      {!isUserAllowedToVote?.data && <HeaderUserNotAllowedToVote />}
      <ElectionTitle election={data?.data.election} />
      <UserAddressTitle electionType={data?.data.election.type} />
      {data?.data.election.lawText && (
        <div>
          <h3>Legea curenta: {data?.data.election.lawText}</h3>
          <h3>Legea propusa: {data?.data.election.proposedLawText}</h3>
          <h3>Sunteti de acord cu modificarea acestei legi?</h3>
        </div>
      )}
      <DropdownTypes
        types={data.data?.candidateTypes}
        electionId={electionId}
        isUserAllowedToVote={isUserAllowedToVote?.data}
      />
    </div>
  );
};
export default VoteEvent;
