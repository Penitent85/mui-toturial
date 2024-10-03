import { Favorite } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  const handlechange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={3}>
      <Rating
        value={value}
        onChange={handlechange}
        // precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<Favorite fontSize="inherit" />}
        readOnly={false}
       highlightSelectedOnly={true}
      />
    </Stack>
  );
};

export default MuiRating;
