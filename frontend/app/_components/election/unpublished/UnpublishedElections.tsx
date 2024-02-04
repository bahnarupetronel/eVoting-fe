"use client";

import { getUnpublishedElections } from "@/_services/election/getUnpublishedElections";
import Elections from "../Elections";

export const UnPublishedElections = () => {
  return (
    <Elections
      getElections={getUnpublishedElections}
      isPublished={false}
    />
  );
};
export default UnPublishedElections;
