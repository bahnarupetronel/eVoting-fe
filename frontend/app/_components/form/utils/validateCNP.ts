const containsOnlyDigits = (CNP) => {
  return /^\d+$/.test(CNP);
};

const compareToCurrentDate = (year, month, day) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const _month = today.getMonth() + 1;
  const _year = today.getFullYear();
  const _day = today.getDay();

  if (_year < year) return false;
  if (_year === year && _month < month) return false;
  if (month === _month && _day < day) return false;

  return true;
};

const validateLastDigit = (lastDigit, CNP) => {
  const values = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
  let sum = 0;
  let contor = 0;
  CNP = CNP.slice(0, -1);
  for (let digit of CNP) {
    sum += parseInt(digit) * values[contor++];
  }

  const newDigit = sum % 11 == 10 ? 1 : sum % 11;
  if (newDigit != lastDigit) return 0;
  return 1;
};

const createYear = (year, firstDigit) => {
  if (firstDigit === 1 || firstDigit === 2) return year + 1900;
  if (firstDigit === 3 || firstDigit === 4) return year + 1800;
  if (firstDigit === 5 || firstDigit === 6) return year + 2000;
  return year + 2000;
};

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const validateDay = (year, month, day) => {
  const daysMonth = getDays(year, month);
  if (day < 1 || day > daysMonth) {
    return 0;
  }

  return 1;
};

const validateMonth = (month) => {
  if (month < 1 || month > 12) {
    return 0;
  }

  return 1;
};

const validateUniqueNumber = (uniqueNumber) => {
  if (uniqueNumber < 1) {
    return 0;
  }

  return 1;
};

const validateInputs = (
  firstDigit,
  lastDigit,
  year,
  month,
  day,
  CNP,
  uniqueNumber
) => {
  if (firstDigit == 0) return false;
  if (!validateDay(year, month, day)) return false;
  if (!validateMonth(month)) return false;
  if (!compareToCurrentDate(year, month, day)) return false;
  if (!validateUniqueNumber(uniqueNumber)) return false;
  if (!validateLastDigit(lastDigit, CNP)) return false;

  return true;
};

export const isCNPValid = (CNP) => {
  if (typeof CNP !== "string" && CNP.length() !== 13) return false;
  if (!containsOnlyDigits(CNP)) return false;

  const firstDigit = parseInt(CNP[0]);
  const year = createYear(parseInt(CNP.slice(1, 3)), firstDigit);
  const month = parseInt(CNP.slice(3, 5));
  const day = parseInt(CNP.slice(5, 7));
  const uniqueNumber = parseInt(CNP.slice(9, 12));
  const lastDigit = parseInt(CNP[12]);

  return validateInputs(
    firstDigit,
    lastDigit,
    year,
    month,
    day,
    CNP,
    uniqueNumber
  );
};

export default isCNPValid;
