import { useEffect, useState } from "react";
import EuropeanParliamentElections from "./EuropeanParliamentElections";
import LocalElections from "./LocalElections";
import ParliamentaryElections from "./ParliamentaryElections";
import PresidentialElections from "./PresidentialElections";
import Referendum from "./Referendum";
import { getCandidates } from "../utils/getCandidates";

const EventFactory = ({
  type,
  handleChange,
}: {
  type: string;
  handleChange: Function;
}) => {
  const [candidates, setCandidates] = useState(null);
  useEffect(() => {
    getCandidates().then((response) => {
      if (200 <= response.status && response.status < 300)
        setCandidates(response.data);
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
