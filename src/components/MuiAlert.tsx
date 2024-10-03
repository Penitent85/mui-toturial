import { Check, LogoDevTwoTone } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2} m={10}>
      <Alert
        severity="error"
        variant="standard"
        onClose={() => alert("close")}
        action={<Button color="inherit">undo</Button>}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert — check it out!
      </Alert>

      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>

      <Alert variant="outlined" severity="error" icon={<LogoDevTwoTone />}>
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>

      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
