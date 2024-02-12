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
  //id 1 and id 3 //Primar sau consiliu local
  //id 2 and id 8 //Consiliu judetean sau Presedinte consiliu judetean
  //id 4, 5, 6, 7 per country
  //9 referendum
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
  if (candidateTypeId == "2" || candidateTypeId == "8")
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
