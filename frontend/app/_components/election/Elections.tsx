"use client";

import { useState, useEffect } from "react";
import { Pagination, Stack } from "@mui/material";
import { getElections } from "./getElections";
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

const Elections = () => {
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

  useEffect(() => {
    setPagination({
      currentPage: 1,
      numberOfPages: getNumberOfPages(filteredElections.length),
    });
  }, [filteredElections.length]);

  useEffect(() => {
    getElections().then((data) => {
      setElections(data);
      setPagination({
        ...pagination,
        numberOfPages: getNumberOfPages(data.length),
      });
    });
  }, []);
  return (
    <div className={styles["container"]}>
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
