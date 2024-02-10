import { ElectionType } from "@/_interfaces/electionType.model";
import styles from "./dropdown.module.css";
import { useGetAddress } from "@/_hooks/user";

const UserAddressTitle = ({
  electionType,
}: {
  electionType?: ElectionType;
}) => {
  const { isSuccess: isSuccessAddress, data: address } = useGetAddress();

  return (
    <span className={styles["user-address"]}>
      {address?.data.name} / {address?.data.county}{" "}
      {electionType?.name !== "Locale" && " / Romania"}
    </span>
  );
};
export default UserAddressTitle;
