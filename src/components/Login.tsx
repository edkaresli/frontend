import React, { useState, MouseEvent, useContext } from 'react'
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { LoggedUserContext } from '../contexts/UserContext';
import { access } from 'fs';
import { LoggedUserDispatchContext } from '../App';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    const loggedUser = useContext(LoggedUserContext);
    const setCurrentUser = useContext(LoggedUserDispatchContext);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        axios.post('http://localhost:3000/login', {email, password})
        .then(res => {
          const accessToken = res.data.accessToken;
          const tokenType = res.data.tokenType;
          const expiresIn = res.data.expiresIn; 
          if(loggedUser) {            
            setCurrentUser({email: email, accessToken: accessToken});
            console.table(loggedUser);
          }
          console.log(`Access token: ${accessToken} \n
                      Token type: ${tokenType} \n
                      Expires in: ${expiresIn}`);
          setEmail('');
          setPassword('');
        })
        .catch(e => {          
          alert(e);
          console.error(e);
        })   
    }

    return (
      <>        
        <form className={classes.root} noValidate autoComplete="off">
          <h2>Login</h2>
          <TextField            
            id="username" 
            label="Enter username" 
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <TextField
            id="signinPass"
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
            Login
          </Button>
          <List component="nav" className={classes.root} aria-label="mailbox folders">          
            <Divider />
          </List>
          <div>Don't have an account?&nbsp;&nbsp;<span><Link to="/signup">Signup!</Link></span></div>
        </form>
      </>
      
    )
}
