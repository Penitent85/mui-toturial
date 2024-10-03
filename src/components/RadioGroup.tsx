import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, FormControlLabel, Radio } from "@mui/material";
// import { Label } from "@mui/icons-material";

const MuiButtonGroup = () => {
  const [value, setValue] = useState("");
  console.log(value);
  console.log(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl component="fieldset" error={value.length === 0}>
        <FormLabel id="Job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          aria-label=""
          name="Job-experience-group"
          aria-labelledby="Job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>
          {value.length === 0 ? "This field is required" : ""}
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiButtonGroup;
