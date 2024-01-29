import EuropeanParliamentElections from "./EuropeanParliamentElections";
import LocalElections from "./LocalElections";
import ParliamentaryElections from "./ParliamentaryElections";
import PresidentialElections from "./PresidentialElections";
import Referendum from "./Referendum";

const EventFactory = ({
  type,
  handleChange,
}: {
  type: string;
  handleChange: Function;
}) => {
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
