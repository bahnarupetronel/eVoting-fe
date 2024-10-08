import { SelectChangeEvent } from "@mui/material";
import Filter from "@/_shared/components/Filter";
import { ElectionModel } from "@/_interfaces/election.model";
import { filter } from "@/_interfaces/filter.model";
import {
  statusFilterOptions,
  typeFilterOptions,
} from "./utils/getFilterOptions";
import SearchBar from "./utils/SearchBar";
import styles from "./election.module.css";

export const Header = ({
  handleFilterChange,
  filters,
  elections,
  isPublished,
}: {
  handleFilterChange;
  filters: filter;
  elections: Array<ElectionModel>;
  isPublished: boolean;
}) => {
  const handleChange = (event: SelectChangeEvent, filter: string) => {
    filter === "status"
      ? handleFilterChange({ ...filters, status: event.target.value })
      : handleFilterChange({ ...filters, type: event.target.value });
  };

  return (
    <header className={styles["header"]}>
      <h4 className={styles["title-header"]}>
        Evenimente {!isPublished && " nepublicate"}
      </h4>
      <SearchBar elections={elections} />
      <Filter
        options={statusFilterOptions}
        value={filters.status}
        label={"Status"}
        id={"status"}
        handleChange={handleChange}
      />
      <Filter
        options={typeFilterOptions}
        value={filters.type}
        label={"Tip"}
        id={"type"}
        handleChange={handleChange}
      />
    </header>
  );
};
export default Header;
