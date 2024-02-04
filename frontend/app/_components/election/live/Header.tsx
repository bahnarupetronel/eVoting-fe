import { SelectChangeEvent } from "@mui/material";
import Filter from "@/_shared/components/Filter";
import { ElectionModel } from "@/_interfaces/election.model";
import { filter } from "@/_interfaces/filter.model";
import {
  statusFilterOptions,
  typeFilterOptions,
} from "../utils/getFilterOptions";
import SearchBar from "../utils/SearchBar";
import styles from "../election.module.css";

export const Header = ({
  handleFilterChange,
  filters,
  elections,
}: {
  handleFilterChange;
  filters: filter;
  elections: Array<ElectionModel>;
}) => {
  const handleChange = (event: SelectChangeEvent, filter: string) => {
    handleFilterChange({ ...filters, type: event.target.value });
  };

  return (
    <header className={styles["header"]}>
      <h4 className={styles["title-header"]}>Evenimente live</h4>
      <SearchBar elections={elections} />
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
