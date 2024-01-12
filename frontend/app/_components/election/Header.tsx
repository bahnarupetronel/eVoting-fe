import styles from "./election.module.css";

import { SelectChangeEvent } from "@mui/material";
import {
  statusFilterOptions,
  typeFilterOptions,
} from "./utils/getFilterOptions";
import Filter from "../../_shared/components/Filter";
import { ElectionModel } from "../../_interfaces/election.model";
import SearchBar from "./utils/SearchBar";
import { filter } from "../../_interfaces/filter.model";

const Header = ({
  handleFilterChange,
  filters,
  elections,
}: {
  handleFilterChange;
  filters: filter;
  elections: Array<ElectionModel>;
}) => {
  const handleChange = (event: SelectChangeEvent, filter: string) => {
    filter === "status"
      ? handleFilterChange({ ...filters, status: event.target.value })
      : handleFilterChange({ ...filters, type: event.target.value });
  };

  return (
    <header className={styles["container-header"]}>
      <h4 className={styles["title-header"]}>Evenimente</h4>
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
