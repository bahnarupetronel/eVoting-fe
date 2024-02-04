export const createOptions = (isSuccess, data, field = "name") => {
  if (!isSuccess) return [];
  let typesArray = [];
  data.map((type) => {
    typesArray.push({ value: type.id.toString(), placeholder: type[field] });
  });
  return typesArray;
};
