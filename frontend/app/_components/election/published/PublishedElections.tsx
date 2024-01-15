"use client";

import { getElections } from "@/_services/election/getPublishedElections";
import Elections from "../Elections";

export const PublishedElections = () => {
  return (
    <Elections
      getElections={getElections}
      isPublished={true}
    />
  );
};
export default PublishedElections;
