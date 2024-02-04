import { ElectionModel } from "@/_interfaces/election.model";
import { getElectionStatus } from "./getElectionStatus";
import { filter } from "@/_interfaces/filter.model";

const elementsPerPage = 10;

export const getFilteredElections = (
  elections: Array<ElectionModel> | any,
  filter: filter
): Array<ElectionModel> => {
  if (!elections) return [];
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

export const getNumberOfPages = (size: number): number => {
  const numberOfPages = Math.floor(size / elementsPerPage);
  if (numberOfPages < size) return numberOfPages + 1;
  numberOfPages;
};

export const getCurrentPageElections = (
  elections: Array<ElectionModel>,
  pageNumber: number
): Array<ElectionModel> => {
  const startIndex = (pageNumber - 1) * elementsPerPage;
  const endIndex = pageNumber * elementsPerPage;
  return elections ? elections.slice(startIndex, endIndex) : [];
};
