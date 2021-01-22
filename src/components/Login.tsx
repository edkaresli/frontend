import React from 'react'
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import { FullscreenExitTwoTone } from '@material-ui/icons';

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

export default function Login() {
    const classes = useStyles();
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="username" 
          label="Enter username" 
          variant="filled"/>
        <TextField
          id="signinPass"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button 
          variant="contained" 
          color="primary">
          Login
        </Button>
        <List component="nav" className={classes.root} aria-label="mailbox folders">          
          <Divider />
        </List>
        <div>Don't have an account?&nbsp;&nbsp;<span><Link to="/signup">Signup!</Link></span></div>
      </form>
    )
}
