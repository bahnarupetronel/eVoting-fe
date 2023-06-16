export const phoneNumberValidation = (phoneNumber) => {
  const phoneNumberRegex = new RegExp(
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
  );

  if (!phoneNumberRegex.test(phoneNumber)) return false;
  return true;
};

export default phoneNumberValidation;
