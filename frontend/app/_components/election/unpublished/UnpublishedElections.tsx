"use client";

import { getUnpublishedElections } from "@/_services/election/getUnpublishedElections";
import Elections from "../Elections";

export const PublishedElections = () => {
  return (
    <Elections
      getElections={getUnpublishedElections}
      isPublished={false}
    />
  );
};
export default PublishedElections;
