import { UserDetailsModel } from "@/_interfaces/userDetails.model";
import styles from "./user.module.css";
import CustomSpan from "../form/customSpan/CustomSpan";

const UserDetails = ({ user }: { user: UserDetailsModel }) => {
  if (!user)
    return <p className={styles["user-details-list"]}>Loading user data...</p>;
  return (
    <ul className={styles["user-details-list"]}>
      <li>
        Nume: <CustomSpan text={user.name} />
      </li>
      <li>
        Email: <CustomSpan text={user.email} />
      </li>
      <li>
        CNP: <CustomSpan text={user.cnp} />
      </li>
      <li>
        Seria si numarul: <CustomSpan text={user.seriesAndNumber} />
      </li>
      <li>
        Numarul de telefon: <CustomSpan text={user.phoneNumber} />
      </li>
      <li>
        Adresa 1:
        <CustomSpan text={user.addressLine1} />
      </li>
      <li>
        Adresa 2:
        <CustomSpan text={user.addressLine2} />
      </li>
      <li>
        Cod postal: <CustomSpan text={user.postalCode} />
      </li>
      <li>
        Localitate: <CustomSpan text={JSON.stringify(user.localityId)} />
      </li>
      <li>
        Judet:
        <CustomSpan text={JSON.stringify(user.countyId)} />
      </li>
      <li>
        Tara:
        <CustomSpan text={user.country} />
      </li>
    </ul>
  );
};
export default UserDetails;
