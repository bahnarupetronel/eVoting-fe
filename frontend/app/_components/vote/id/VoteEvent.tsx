"use client";

import { usePathname } from "next/navigation";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import ElectionTitle from "@/_components/election/ElectionTitle";
import { useGetElectionAndTypes } from "@/_hooks/elections";
import DropdownTypes from "./DropdownTypes";
import UserAddressTitle from "./UserAddressTitle";
import { useGetIsUserAllowedToVote } from "@/_hooks/user";
import HeaderUserNotAllowedToVote from "./HeaderUserNotAllowedToVote";

const VoteEvent = () => {
  const pathname = usePathname();
  const electionId: string = pathname.split("/")[2];

  const { isSuccess, isLoading, isError, data } =
    useGetElectionAndTypes(electionId);

  const { isSuccess: isSuccesIsUserAllowed, data: isUserAllowedToVote } =
    useGetIsUserAllowedToVote();

  if (isLoading) {
    return <div>Se incarca...</div>;
  }

  return (
    <div className={globalStyles["container"]}>
      {!isUserAllowedToVote?.data && <HeaderUserNotAllowedToVote />}
      <ElectionTitle election={data?.data.election} />
      <UserAddressTitle electionType={data?.data.election.type} />
      <DropdownTypes
        types={data.data?.candidateTypes}
        electionId={electionId}
        isUserAllowedToVote={isUserAllowedToVote?.data}
      />
    </div>
  );
};
export default VoteEvent;
