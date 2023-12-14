"use client";

import { useState, useEffect } from "react";
import { getElections } from "./getElections";
import { ElectionCard } from "./ElectionCard";
import styles from "./election.module.css";
import { ElectionModel } from "../../_interfaces/election.model";
import Header from "./Header";
import { Pagination, Stack } from "@mui/material";
import { getElectionStatus } from "./utils/getElectionStatus";
import { filter } from "./utils/getFilterOptions";

const elementsPerPage = 5;

const filterElections = (elections: Array<ElectionModel>, filter: filter) => {
  if (!filter.status && !filter.type) return elections;

  elections = filter.status
    ? elections.filter((election) => {
        const status = getElectionStatus(election.startDate, election.endDate);
        if (status === filter.status) return election;
      })
    : elections;

  elections = filter.type
    ? elections.filter((election) => election.type.name === filter.type)
    : elections;
  return elections;
};

const getNumberOfPages = (size: number) => {
  const numberOfPages = Math.floor(size / elementsPerPage);
  if (numberOfPages < size) return numberOfPages + 1;
  numberOfPages;
};

const paginateElections = (
  elections: Array<ElectionModel>,
  pageNumber: number
) => {
  const startIndex = (pageNumber - 1) * elementsPerPage;
  const endIndex = pageNumber * elementsPerPage;

  const elementsOnCurrentPage = elections.slice(startIndex, endIndex);
  return elementsOnCurrentPage;
};

const Elections = () => {
  const [elections, setElections] = useState<Array<ElectionModel>>(null);
  const [filteredElections, setFilteredElections] =
    useState<Array<ElectionModel>>(null);
  const [currentPageElections, setCurrentPageElection] =
    useState<Array<ElectionModel>>(null);
  const [filter, setFilters] = useState<filter>({ status: "", type: "" });
  const [pagination, setPagination] = useState({
    numberOfPages: 1,
    currentPage: 1,
  });

  const handleFilterChange = (filter) => {
    setFilters(filter);
    const currentElections = filterElections(elections, filter);
    setFilteredElections(currentElections);
    setCurrentPageElection(paginateElections(currentElections, 1));
    setPagination({
      currentPage: 1,
      numberOfPages: getNumberOfPages(currentElections.length),
    });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination({ ...pagination, currentPage: value });
    setCurrentPageElection(paginateElections(filteredElections, value));
  };

  useEffect(() => {
    getElections().then((data) => {
      setFilteredElections(data);
      setElections(data);
      setPagination({
        ...pagination,
        numberOfPages: getNumberOfPages(data.length),
      });
      setCurrentPageElection(paginateElections(data, pagination.currentPage));
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
          currentPageElections.map((election: ElectionModel) => (
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
