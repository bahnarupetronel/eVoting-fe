"use client";

import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { locality } from "@/_interfaces/locality.model";
import getLocalities from "../../_services/counties/getLocalities";
import getCounties from "../../_services/counties/getCounties";
import styles from "./filter.module.css";

const FilterLocalities = ({
  handleLocalityChange,
}: {
  handleLocalityChange: Function;
}) => {
  const [filters, setFilters] = useState({ locality: "", county: "" });
  const [localities, setLocalities] = useState<Array<locality>>([]);
  const [counties, setCounties] = useState([]);
  const [localitiesFilterOptions, setLocalitiesFilterOptions] = useState([]);
  const [key, setKey] = useState(null);

  const countiesFilterOptions: Array<String> = [];
  counties?.forEach((county) => {
    countiesFilterOptions.push(county?.name);
  });

  const filterLocalitiesByCounty = (): void => {
    if (filters.county && countiesFilterOptions.indexOf(filters.county) >= 0) {
      const county = counties.find((county) => county.name == filters.county);
      
      let filteredLocalities = localities?.filter(
        (locality) => locality.county === county.name
      );
      const filtered = [];
      filteredLocalities?.forEach((locality) =>
        filtered.push({
          label: locality?.name,
        })
      );

      setLocalitiesFilterOptions(filtered);
    }
  };

  const handleChange = (value: string, filter: string) => {
    if (filter === "county") {
      setFilters({ locality: "", county: value });
    } else {
      const selected: locality = localities.find(
        (locality: locality) =>
          locality.name === value && locality.county === filters.county
      );
      handleLocalityChange(selected || "");
      setFilters({ ...filters, locality: value || "" });
    }
  };

  useEffect(() => {
    filterLocalitiesByCounty();
    setFilters({ ...filters, locality: "" });
    setKey(new Date());
  }, [filters.county]);

  useEffect(() => {
    getLocalities().then((data) => setLocalities(data));
    getCounties().then((data) => setCounties(data));
  }, []);

  return (
    <div className={styles["flex"]}>
      <Autocomplete
        inputValue={filters.county}
        onInputChange={(event: any, newValue: string | null) => {
          handleChange(newValue, "county");
        }}
        disablePortal
        id="combo-box-county"
        options={countiesFilterOptions}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Judet"
          />
        )}
      />

      <Autocomplete
        key={key}
        inputValue={filters.locality}
        onInputChange={(event: any, newValue: string | null) => {
          handleChange(newValue, "locality");
        }}
        disablePortal
        id="combo-box-locality"
        options={localitiesFilterOptions}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Localitate"
          />
        )}
      />
    </div>
  );
};
export default FilterLocalities;
