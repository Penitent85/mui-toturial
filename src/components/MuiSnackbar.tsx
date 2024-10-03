import React, { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import { Alert, AlertProps } from "@mui/material";

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackAlert(props, ref) {
      return <Alert elevation={6} ref={ref} {...props} />;
    }
  );

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
 
  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Submit
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully
        </SnackbarAlert>
      </Snackbar>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={200}
        open={open}
        onClose={handleClose}
        message="Form Submitted Successfully"
      /> */}
    </>
  );
};

export default MuiSnackbar;
