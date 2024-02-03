import isCNPValid from "@/_components/form/utils/validateCNP";
import isSerieAndNumberValid from "@/_components/form/utils/validateSeriesAndNumber";
import { userDetailsEdit } from "@/_interfaces/userDetailsEdit.model";

export const isFormValid = (user: userDetailsEdit) => {
  for (const key in user) {
    if (
      key.toString() !== "addressLine2" &&
      key.toString() !== "roles" &&
      key.toString() !== "isEmailConfirmed" &&
      key.toString() !== "isIdentityVerified" &&
      key.toString() !== "locality"
    )
      if (!user[key]) {
        console.log(key);
        return false;
      }
  }
  if (!isCNPValid(user.cnp)) return false;
  if (!isSerieAndNumberValid(user.seriesAndNumber)) return false;

  return true;
};
