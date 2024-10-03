import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
  FormControl,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

const MuiButtonGroup = () => {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  console.log(accept);
  const handleCgange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(e.target.checked);
  };
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      // setSkills(skills.filter((skill) => skill !== e.target.value));
      setSkills([...skills.slice(0, index), ...skills.slice(index + 1)]);
    }
  };
  return (
    <>
      <Box>
        <Box>
          <FormControlLabel
            label="I accept the terms and conditions"
            control={<Checkbox checked={accept} onChange={handleCgange} />}
          />
        </Box>
        <Box>
          <Checkbox
            color="error"
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={accept}
            onChange={handleCgange}
          />
        </Box>
      </Box>
      <Box>
        <FormControl  error={skills.length ===0}>
          <FormLabel>Skills</FormLabel>
          <FormGroup >
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="HTML"
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="JavaScript"
                  checked={skills.includes("JavaScript")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormHelperText >
            select your skills
            </FormHelperText>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default MuiButtonGroup;
