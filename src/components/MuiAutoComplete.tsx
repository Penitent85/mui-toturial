import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
const skills = ["HTML", "CSS", "JS", "React", "Angular", "Vue"];

type Skill = {
  id: number;
  label: string;
};
const skiilsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  
  console.log({skill})
  return (
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField {...params} label="Skills" variant="outlined" />
        )}
        value={value}
        onChange={(e: any, newValue: string | null) => setValue(newValue)}
      />
      <Autocomplete
        options={skiilsOptions} 
        renderInput={(params) => (
          <TextField {...params} label="Skills" variant="outlined" />
        )}
        value={skill}
        onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;

// freeSolo
