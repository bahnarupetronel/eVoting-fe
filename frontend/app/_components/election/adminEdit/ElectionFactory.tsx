"use client";

import { usePathname } from "next/navigation";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import { useGetElectionById } from "@/_hooks/elections";
import IsLoadingComponent from "@/_shared/components/isLoading/IsLoadingComponent";
import ReferendumElection from "./ReferendumElection";
import Election from "./Election";

const ElectionFactory = () => {
  const pathname = usePathname();
  const id: string = pathname.split("/")[3];
  const {
    isSuccess: isElectionFetched,
    isError,
    isLoading,
    data: election,
  } = useGetElectionById(id);

  if (isLoading) {
    return (
      <main className={globalStyles["container"]}>
        <IsLoadingComponent />
      </main>
    );
  }

  if (isError) {
    return <main className={globalStyles["container"]}>Eroare...</main>;
  }

  if (election?.data?.type.name === "Referendum")
    return <ReferendumElection election={election?.data} />;

  return <Election election={election?.data} />;
};
export default ElectionFactory;
