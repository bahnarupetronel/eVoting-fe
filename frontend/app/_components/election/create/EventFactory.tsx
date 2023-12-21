import EuropeanParliamentElections from "./EuropeanParliamentElections";
import LocalElections from "./LocalElections";
import ParliamentaryElections from "./ParliamentaryElections";
import PresidentialElections from "./PresidentialElections";
import Referendum from "./Referendum";
import { getAllCandidates } from "../utils/getAllCandidates";
import { useEffect, useState } from "react";

const EventFactory = ({
  type,
  handleChange,
}: {
  type: string;
  handleChange: Function;
}) => {
  const [candidates, setCandidates] = useState(null);
  useEffect(() => {
    getAllCandidates().then((data) => {
      setCandidates(data);
    });
  }, []);
  return (
    <div>
      {type === "Referendum" && <Referendum handleChange={handleChange} />}
      {type === "Locale" && <LocalElections />}
      {type === "Prezidentiale" && <PresidentialElections />}
      {type === "Parlamentare" && <ParliamentaryElections />}
      {type === "Parlamentul european" && <EuropeanParliamentElections />}
    </div>
  );
};
export default EventFactory;
