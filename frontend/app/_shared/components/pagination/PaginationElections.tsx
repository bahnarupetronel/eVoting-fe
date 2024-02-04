import { Pagination, Stack } from "@mui/material";
import styles from "./pagination.module.css";

const PaginationElections = ({
  numberOfPages,
  onChange,
  currentPage,
  isOpen,
}) => {
  if (!isOpen) return <></>;
  return (
    <Stack
      spacing={2}
      className={styles["pagination"]}
    >
      <Pagination
        count={numberOfPages}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
        page={currentPage}
      />
    </Stack>
  );
};
export default PaginationElections;
