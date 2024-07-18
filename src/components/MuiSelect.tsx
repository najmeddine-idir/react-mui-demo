import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [contries, setCountries] = useState<string[]>([]);
  const handleCountriesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Countries"
        select
        fullWidth
        value={contries}
        onChange={(e) => handleCountriesChange(e)}
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="MA">Morocco</MenuItem>
        <MenuItem value="DZ">Algeria</MenuItem>
        <MenuItem value="TN">Tunisia</MenuItem>
        <MenuItem value="TO">Tunasio</MenuItem>
        <MenuItem value="MN">Mauritania</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
