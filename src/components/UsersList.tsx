import React, { useState, useEffect, MouseEvent, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CustomizedTables from './UsersTable'; 
import { LoggedUserContext } from '../contexts/UserContext';
import { LoggedUserDispatchContext } from '../App';
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

export default function UsersList() {
   // const [users, setUsers] = useState([]);
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: ''});
    const classes = useStyles();
    const currentUser = useContext(LoggedUserContext);
    const [update, setUpdate] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if(user.password.length < 7) {
        alert("Password must be at least 7 characters!"); 
      }
      else {
        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser.accessToken}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const result = axios.post(`${axios.defaults.baseURL}/users`, {firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.password});
        result.then(response => {
          console.table(response.data);
          setUser({firstName: '', lastName: '', email: '', password: ''});
          setUpdate(true);
        })
        .catch(e => {
          console.error(e);
        })
      }      
    }
    
    useEffect(() => {
      

      return () => {
        
      }
    }, [update])

    return (
        <div className="outer-container">
            <h2>Users list</h2>
            <div className="create-user">
                <div style={{display: "flex", flexDirection: "row"}}>
                  <TextField 
                    style={{margin: "5px"}}
                    id="userFirstName" 
                    label="Enter first name" 
                    variant="filled"
                    value={user.firstName}
                    onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                    <TextField 
                    style={{margin: "5px"}}
                    id="userLastName" 
                    label="Enter last name" 
                    variant="filled"
                    value={user.lastName}
                    onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                    <TextField 
                    style={{margin: "5px"}}
                    id="userEmail" 
                    label="Enter email address" 
                    variant="filled"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}/>  
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                  <TextField
                    style={{margin: "5px"}}
                    id="userPass"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}/>
                    <Button 
                    style={{margin: "5px"}} 
                    variant="contained" 
                    color="primary"
                    onClick={handleClick}>
                    Create user
                    </Button>
                    <TextField 
                    style={{visibility: "hidden"}}
                    id="invisible" 
                    label="" 
                    variant="filled"/>  
                </div>                
            </div>
            <List component="nav" className={classes.root} aria-label="mailbox folders">          
              <Divider />
            </List>
            <div className="users-list">
              <CustomizedTables />
            </div>
            <List component="nav" className={classes.root} aria-label="mailbox folders">          
              <Divider />
            </List> 
        </div>
    )
}
