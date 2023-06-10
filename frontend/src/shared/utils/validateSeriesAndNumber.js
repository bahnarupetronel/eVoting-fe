export const isSerieAndNumberValid = (value) => {
  const seriesAndNumberRegex = new RegExp(/^[a-zA-Z]{2}\d{6}$/i);
  if (!seriesAndNumberRegex.test(value)) return false;
  return true;
};

export default isSerieAndNumberValid;
