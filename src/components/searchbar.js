import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ search, setSearch }) => {
  return (
    <TextField
      label="Search by name"
      variant="outlined"
      fullWidth
      margin="normal"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
