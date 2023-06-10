const containsOnlyDigits = (CNP) => {
  //returns true if the CNP contains only digits, otherwise false
  return /^\d+$/.test(CNP);
};

const compareToCurrentDate = (year, month, day) => {
  //compared the date from the CNP to the current date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const _month = today.getMonth() + 1;
  const _year = today.getFullYear();
  const _day = today.getDay();

  console.log("\nComparing birthday to current date:");

  if (_year < year) return false;
  console.log("The year is valid, test passed");
  if (_year === year && _month < month) return false;
  console.log("The month is valid, test passed");
  if (month === _month && _day < day) return false;

  console.log("The date is valid, test passed\n");
  return true;
};

const validateLastDigit = (lastDigit, CNP) => {
  const values = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
  let sum = 0;
  let contor = 0;
  CNP = CNP.slice(0, -1);
  for (digit of CNP) {
    sum += parseInt(digit) * values[contor++];
  }

  const newDigit = sum % 11 == 10 ? 1 : sum % 11;
  //console.log(newDigit);
  if (newDigit != lastDigit) {
    console.log(
      "the last digit is incorrect: the expected result was ",
      lastDigit,
      ", but the sum % 11 is ",
      newDigit
    );
    return 0;
  }

  console.log("The last digit is valid, test passed");
  return 1;
};

const createYear = (year, firstDigit) => {
  if (firstDigit === 1 || firstDigit === 2) return year + 1900;
  if (firstDigit === 3 || firstDigit === 4) return year + 1800;
  if (firstDigit === 5 || firstDigit === 6) return year + 2000;
  //for foreign residents and foreigners
  return year + 2000;
};

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const validateDay = (year, month, day) => {
  const daysMonth = getDays(year, month);
  if (day < 1 || day > daysMonth) {
    console.log("Invalid day");
    return 0;
  }

  console.log("The day is valid, test passed");
  return 1;
};

const validateMonth = (month) => {
  //console.log(month);
  if (month < 1 || month > 12) {
    console.log("Invalid month");
    return 0;
  }

  console.log("The month is valid, test passed");
  return 1;
};

const validateUniqueNumber = (uniqueNumber) => {
  if (uniqueNumber < 1) {
    console.log("Invalid unique number");
    return 0;
  }

  console.log("The unique number is valid, test passed");
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
  if (firstDigit == 0) return 0;
  if (!validateDay(year, month, day)) return 0;
  if (!validateMonth(month)) return 0;
  if (!compareToCurrentDate(year, month, day)) return 0;
  if (!validateUniqueNumber(uniqueNumber)) return 0;
  if (!validateLastDigit(lastDigit, CNP)) return 0;

  return 1;
};

export const isCNPValid = (CNP) => {
  if (typeof CNP !== "string" && CNP.length() !== 13) return 0;
  if (!containsOnlyDigits(CNP)) return 0;

  const firstDigit = parseInt(CNP[0]);
  const year = createYear(parseInt(CNP.slice(1, 3)), firstDigit);
  const month = parseInt(CNP.slice(3, 5));
  const day = parseInt(CNP.slice(5, 7));
  const placeOfBirth = CNP.slice(7, 9);
  const uniqueNumber = parseInt(CNP.slice(9, 12));
  const lastDigit = CNP[12];

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
