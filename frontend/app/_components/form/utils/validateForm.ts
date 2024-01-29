export const getFormErrors = ({
  name,
  email,
  password,
  confirmPassword,
  functionKey,
  specialityKey,
}) => {
  let errors = [];
  if (
    !name ||
    !email ||
    !password ||
    !confirmPassword ||
    !functionKey ||
    !specialityKey
  )
    errors.push("invalid-form");
  if (!functionKey) errors.push("invalid-function");
  if (!specialityKey) errors.push("invalid-speciality");
  if (!isNameValid(name)) errors.push("invalid-name");
  if (!isEmailValid(email)) errors.push("invalid-email");
  if (!isPasswordValid(password)) errors.push("invalid-password");
  if (password !== confirmPassword) errors.push("mismatch");

  return errors;
};

export const isEmailValid = (email) => {
  const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

  if (!emailRegex.test(email)) return false;
  return true;
};

export const isPasswordValid = (password) => {
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm
  );

  if (!passwordRegex.test(password)) return false;

  return true;
};

export const isNameValid = (name) => {
  const nameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  if (!nameRegex.test(name)) return false;
  return true;
};

export const isConfirmPasswordValid = (password, confirmPassword) => {
  if (password !== confirmPassword) return false;
  return true;
};

export const errorsList = {
  "invalid-name": "name",
  "invalid-form": "",
  "invalid-email": "email",
  mismatch: "confirm-password",
  "invalid-password": "password",
  "invalid-function": "function",
  "invalid-speciality": "speciality",
};

export const errors = {
  "invalid-name": "Not a valid name",
  "invalid-form": "All inputs and selects are mandatory",
  "invalid-email": "Not a valid email format",
  "invalid-confirm-password": "The passwords must match",
  "invalid-password":
    "The password must have at least 8 and maximum 20 characters,contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.It can contain special characters",
};

export const loginFormErrors = {
  "invalid-email": "email",
  "invalid-password": "password",
};
