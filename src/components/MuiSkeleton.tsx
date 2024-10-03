import React, { useEffect, useState } from "react";
import MuiSelect from "./MuiSelect";
import { Box, Skeleton, Stack } from "@mui/material";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }
  , []);
  return (
    <Box sx={{
      width: 250,
      height: 118,
    }}>
      {
        loading ? (
          <Skeleton variant="rectangular" width={250} height={118} animation="wave" />
        ):
       <img height={118} width={250} src='https://plus.unsplash.com/premium_photo-1667162417511-5c897c896ed3?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      }
     </Box>
  );
};

export default MuiSkeleton;



// <Stack spacing={1} width={250} m={20}>
//       <Skeleton variant="text" animation={false} />
//       <Skeleton variant="circular" width={40} height={40} animation="pulse" />
//       <Skeleton
//         variant="rectangular"
//         width={210}
//         height={118}
//         animation="wave"
//       />
//     </Stack>