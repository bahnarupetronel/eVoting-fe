import styles from "./election.module.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  InputBase,
  Paper,
  IconButton,
  List,
  ListItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import {
  statusFilterOptions,
  typeFilterOptions,
  filter,
} from "./utils/getFilterOptions";
import Filter from "./utils/Filter";
import { ElectionModel } from "../../_interfaces/election.model";

const Header = ({
  handleFilterChange,
  filters,
  elections,
}: {
  handleFilterChange;
  filters: filter;
  elections: Array<ElectionModel>;
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredElections, setFilteredElections] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    let filtered = [];
    if (value)
      filtered = elections.filter((election) =>
        election.title.toLowerCase().includes(value.toLowerCase())
      );
    setFilteredElections(filtered);
  };

  const handleChange = (event: SelectChangeEvent, filter: string) => {
    filter === "status"
      ? handleFilterChange({ ...filters, status: event.target.value })
      : handleFilterChange({ ...filters, type: event.target.value });
  };

  return (
    <header className={styles["container-header"]}>
      <h4 className={styles["title-header"]}>Evenimente</h4>
      <div className={styles["search-box"]}>
        <>
          <Paper
            className={styles["search-bar"]}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Cauta un eveniment..."
              inputProps={{ "aria-label": "search eveniments" }}
              value={searchTerm}
              onChange={handleSearch}
            />
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </>
        {filteredElections.length > 0 && (
          <List className={styles["search-list"]}>
            {filteredElections?.map((election) => (
              <ListItem
                key={election.title + election.electionId}
                className={styles["search-list-item"]}
              >
                {election.title}
              </ListItem>
            ))}
          </List>
        )}
      </div>
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
