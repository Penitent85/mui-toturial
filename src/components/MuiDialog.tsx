import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={"dialog-title"}
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description ">
            Are you sure you want to submit the test? You will not be able to
            edit the test after submission.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
