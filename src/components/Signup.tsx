import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        display: "flex"
      },      
    },
  }),
);
  
export default function Signup() {
    const classes = useStyles();
    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
            id="firstName" 
            label="Enter first name" 
            variant="filled"/>
            <TextField 
            id="lastName" 
            label="Enter last name" 
            variant="filled"/>
            <TextField 
            id="email" 
            label="Enter email address" 
            variant="filled"/>
            <TextField
            id="newPass"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />
            <Button 
            variant="contained" 
            color="primary">
            Create an account
            </Button>
            <List component="nav" className={classes.root} aria-label="mailbox folders">          
              <Divider />
            </List>
        </form>  
      </div>
    )
}
