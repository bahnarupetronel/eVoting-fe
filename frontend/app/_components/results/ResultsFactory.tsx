import ReferendumResults from "./ReferendumResults";
import ResultsPerCountry from "./ResultsPerCountry";
import ResultsPerCounty from "./ResultsPerCounty";
import ResultsPerLocality from "./ResultsPerLocality";

const ResultsFactory = ({
  candidateTypeId,
  election,
  status,
}: {
  candidateTypeId: string;
  election;
  status: string;
}) => {
  //Locality: Primar(1), Consiliu local(3)
  //County: Consiliu judetean(8), Presedinte consiliu judetean(2), Senat(4), Camera deputatilor(5)
  //Country: Referendum(9), Parlament european(7), Presedinte(6)
  if (status !== "Terminat")
    return (
      <div>
        <h3>Rezultate: </h3>
        <p>
          Rezultatele vor fi publicate dupa ce se termina perioada de votare.
        </p>
      </div>
    );
  if (candidateTypeId == "1" || candidateTypeId == "3")
    return (
      <div>
        <h3>Rezultate: </h3>
        <ResultsPerLocality
          candidateTypeId={candidateTypeId}
          election={election}
        />
      </div>
    );
  if (
    candidateTypeId == "2" ||
    candidateTypeId == "8" ||
    candidateTypeId == "5" ||
    candidateTypeId == "4"
  )
    return (
      <div>
        <h3>Rezultate:</h3>
        <ResultsPerCounty
          candidateTypeId={candidateTypeId}
          election={election}
        />
      </div>
    );

  if (candidateTypeId == "9")
    return (
      <div>
        <h3>Rezultate:</h3>
        <ReferendumResults election={election} />
      </div>
    );
  return (
    <div>
      <h3>Rezultate:</h3>
      <ResultsPerCountry
        candidateTypeId={candidateTypeId}
        election={election}
      />
    </div>
  );
};
export default ResultsFactory;
