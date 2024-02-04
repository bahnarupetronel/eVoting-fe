export const createPoliticalPartyOptions = (data) => {
  let typesArray = [{ value: "", placeholder: "Selectati o varianta" }];
  data.map((politicalParty) => {
    typesArray.push({
      value: politicalParty.politicalParty.id.toString(),
      placeholder: politicalParty.politicalParty.name,
    });
  });
  return typesArray;
};
