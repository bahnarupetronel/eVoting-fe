import { useState, useRef, useEffect, FocusEventHandler } from "react";
import { IconButton, InputBase, List, ListItem, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../election.module.css";
import { ElectionModel } from "../../../_interfaces/election.model";

const SearchBar = ({ elections }: { elections: Array<ElectionModel> }) => {
  const searchList = useRef(null);
  const [openSearchList, setOpenSearchList] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredElections, setFilteredElections] = useState<
    Array<ElectionModel>
  >([]);

  const handleSearch = (event?: React.ChangeEvent<HTMLInputElement>): void => {
    let filtered = [];
    if (!event && searchTerm && elections.length > 0) {
      filtered = elections.filter((election) =>
        election.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (event) {
      const value = event.target.value;
      setSearchTerm(value);
      if (value)
        filtered = elections.filter((election) =>
          election.title.toLowerCase().includes(value.toLowerCase())
        );
    }

    setOpenSearchList(filtered.length > 0);
    setFilteredElections(filtered);
  };

  const handleFocus = () => {
    handleSearch(null);
  };

  const closeSearchList = (e: MouseEvent): void => {
    if (
      searchList.current &&
      openSearchList &&
      !searchList.current.contains(e.target)
    )
      setOpenSearchList(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSearchList);
    return () => {
      document.removeEventListener("mousedown", closeSearchList);
    };
  }, [searchTerm]);

  return (
    <div className={styles["search-box"]}>
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
          onFocus={handleFocus}
        />
        <IconButton
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {openSearchList && filteredElections.length > 0 && (
        <List
          className={styles["search-list"]}
          ref={searchList}
        >
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
  );
};
export default SearchBar;
