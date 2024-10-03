import { Box, InputAdornment, MenuItem, Stack, TextField } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width={"250px"}>
      <TextField
        SelectProps={{
          multiple: true,
        }}
        fullWidth
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        helperText="Please select your country"
        error={country.length === 0}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect
