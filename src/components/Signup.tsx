import React, { MouseEvent, useState } from 'react'
// import { MouseEventHandler } from "@types/react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      const newUser = {firstName, lastName, email, password};
      if(password.length < 7) {
        alert("Password must be at least 7 characters!");
      }
      else{
        axios.post('http://localhost:3000/signUp', {email, password, firstName, lastName})
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.error(e);
        })
        console.table(newUser);  
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      }            
    }

    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
            id="firstName" 
            label="Enter first name" 
            variant="filled"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
            <TextField 
            id="lastName" 
            label="Enter last name" 
            variant="filled"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
            <TextField 
            id="email" 
            label="Enter email address" 
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <TextField
            id="newPass"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleClick}>
            Create an account
            </Button>
            <List component="nav" className={classes.root} aria-label="mailbox folders">          
              <Divider />
            </List>
        </form>  
      </div>
    )
}
