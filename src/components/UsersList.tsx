import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import CustomizedTables from './UsersTable'; 

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
    const classes = useStyles();
    return (
        <div className="outer-container">
            <div className="create-user">
                <div style={{display: "flex", flexDirection: "row"}}>
                  <TextField 
                    style={{margin: "5px"}}
                    id="userFirstName" 
                    label="Enter first name" 
                    variant="filled"/>
                    <TextField 
                    style={{margin: "5px"}}
                    id="userLastName" 
                    label="Enter last name" 
                    variant="filled"/>
                    <TextField 
                    style={{margin: "5px"}}
                    id="userEmail" 
                    label="Enter email address" 
                    variant="filled"/>  
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                  <TextField
                    style={{margin: "5px"}}
                    id="userPass"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"/>
                    <Button 
                    style={{margin: "5px"}} 
                    variant="contained" 
                    color="primary">
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
