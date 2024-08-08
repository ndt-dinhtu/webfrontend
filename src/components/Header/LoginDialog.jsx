import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function LoginDialog({ open, onClose }) {
  const [mode, setMode] = useState(MODE.LOGIN);
  const classes = useStyles();

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <IconButton className={classes.closeButton} onClick={onClose}>
        <Close />
      </IconButton>

      <DialogContent>
        {mode === MODE.REGISTER && (
          <>
            <Register closeDialog={onClose} />

            <Box textAlign="center">
              <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                Already have an account. Login here
              </Button>
            </Box>
          </>
        )}

        {mode === MODE.LOGIN && (
          <>
            <Login closeDialog={onClose} />

            <Box textAlign="center">
              <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                Don't have an account. Register here
              </Button>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
