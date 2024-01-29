"use client";

import { getLiveElections } from "@/_services/election/getLiveElections";
import Elections from "../Elections";

const Vote = () => {
  return (
    <Elections
      getElections={getLiveElections}
      isPublished={true}
    />
  );
};

export default Vote;
