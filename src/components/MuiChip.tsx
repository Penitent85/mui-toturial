import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip icon={<Face />} label={"Chip"} color="primary" size="medium" />
      <Chip
        label={"Mahdi Alsholi"}
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>MA</Avatar>}
      />
      <Chip
        label={"Click "}
        color="success"
        size="medium"
        onClick={() => {
          alert("clicked");
        }}
      />
      <Chip
        label={"Delete "}
        color="error"
        size="medium"
        onClick={() => {
          alert("clicked");
        }}
        onDelete={() => alert("deleted")}
      />
      {chips.map((chip, index) => (
        <Chip
          key={index}
          label={chip}
          color="primary"
          size="medium"
          onDelete={() => {
            const newChips = chips.filter((c) => c !== chip);
            setChips(newChips);
          }}
        />
      ))}
    </Stack>
  );
};

export default MuiChip;
