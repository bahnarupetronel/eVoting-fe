"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { Pagination, Stack } from "@mui/material";
import { ElectionCard } from "./ElectionCard";
import { Header } from "./Header";
import { ElectionModel } from "@/_interfaces/election.model";
import { filter } from "@/_interfaces/filter.model";
import {
  getFilteredElections,
  getCurrentPageElections,
  getNumberOfPages,
} from "./utils/electionsUtils";
import styles from "./election.module.css";
import globalStyles from "@/_shared/stylesheets/App.module.css";

const Elections = ({
  getElections,
  isPublished,
}: {
  getElections: Function;
  isPublished: boolean;
}) => {
  const [elections, setElections] = useState<Array<ElectionModel>>([]);
  const [pagination, setPagination] = useState({
    numberOfPages: 1,
    currentPage: 1,
  });
  const [filter, setFilters] = useState<filter>({ status: "", type: "" });
  const filteredElections: Array<ElectionModel> = getFilteredElections(
    elections,
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
    getElections().then((response) => {
      if (200 <= response.status && response.status < 300) {
        setElections(response.data);
        setPagination({
          ...pagination,
          numberOfPages: getNumberOfPages(response.data.length),
        });
      }
    });
  }, []);
  return (
    <div className={globalStyles["container"]}>
      <Header
        elections={filteredElections}
        handleFilterChange={handleFilterChange}
        filters={filter}
        isPublished={isPublished}
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
          <div>Niciun eveniment disponibil</div>
        )}
      </div>

      <Stack
        spacing={2}
        className={styles["pagination"]}
      >
        <Pagination
          count={pagination.numberOfPages}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          page={pagination.currentPage}
        />
      </Stack>
    </div>
  );
};
export default Elections;
