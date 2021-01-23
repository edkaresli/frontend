import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UpdateDialogProps from '../interfaces/UpdateDialogProps';
import User from '../interfaces/User';

export default function UpdateUser(props: UpdateDialogProps) {
  const [open, setOpen] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Update user
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update user data</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Enter user data to update
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="updateFirstName"
                label="First name"
                type="text"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="updateLastName"
                label="Last name"
                type="text"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="updateEmail"
                label="Email Address"
                type="email"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="updatePassword"
                label="Password"
                type="password"
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="default">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Update
            </Button>
            </DialogActions>
          </Dialog>  
        </div>
    )
}
