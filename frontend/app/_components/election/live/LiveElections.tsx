"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { ElectionCard } from "./ElectionCard";
import { ElectionModel } from "@/_interfaces/election.model";
import { filter } from "@/_interfaces/filter.model";
import {
  getFilteredElections,
  getCurrentPageElections,
  getNumberOfPages,
} from "../utils/electionsUtils";
import styles from "../election.module.css";
import globalStyles from "@/_shared/stylesheets/global.module.css";
import Header from "./Header";
import PaginationElections from "@/_shared/components/pagination/PaginationElections";
import { useGetLiveElections } from "@/_hooks/elections";
import Recommandations from "./Recommandations";

const LiveElections = () => {
  const [pagination, setPagination] = useState({
    numberOfPages: 1,
    currentPage: 1,
  });
  const [filter, setFilters] = useState<filter>({ status: "", type: "" });
  const { isSuccess, data: elections } = useGetLiveElections();

  const filteredElections: Array<ElectionModel> = getFilteredElections(
    elections?.data,
    filter
  );
  const currentPageElections: Array<ElectionModel> = getCurrentPageElections(
    filteredElections,
    pagination.currentPage
  );

  const handleFilterChange = (filter) => {
    setFilters(filter);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination({ ...pagination, currentPage: value });
  };

  useLayoutEffect(() => {
    window?.scrollTo({ top: 1, behavior: "smooth" });
  }, [pagination.currentPage]);

  useEffect(() => {
    setPagination({
      currentPage: 1,
      numberOfPages: getNumberOfPages(filteredElections.length),
    });
  }, [filteredElections.length]);

  useEffect(() => {
    if (isSuccess) {
      setPagination({
        ...pagination,
        numberOfPages: getNumberOfPages(elections.data.length),
      });
    }
  }, [isSuccess]);

  return (
    <div className={globalStyles["container"]}>
      <Header
        elections={filteredElections}
        handleFilterChange={handleFilterChange}
        filters={filter}
      />
      <div className={styles["cards-container"]}>
        {currentPageElections?.length > 0 ? (
          currentPageElections?.map((election: ElectionModel) => (
            <ElectionCard
              election={election}
              key={election.electionId}
            />
          ))
        ) : (
          <div>
            Niciun eveniment disponibil
            <Recommandations />
          </div>
        )}
      </div>
      <PaginationElections
        numberOfPages={pagination.numberOfPages}
        onChange={handlePageChange}
        currentPage={pagination.currentPage}
        isOpen={filteredElections?.length > 0}
      />
    </div>
  );
};
export default LiveElections;
