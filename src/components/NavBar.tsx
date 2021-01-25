import React, { useState, useContext, useEffect, MouseEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Redirect } from 'react-router-dom';
import { LoggedUserContext, LoggedUserType } from '../contexts/UserContext';
import { LoggedUser } from '../interfaces/User';
import { LoggedUserDispatchContext } from '../App';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavBar() {
    const [user, setUser] = useState<LoggedUserType>(useContext(LoggedUserContext));
    const classes = useStyles(); 
    // const [displayLogout, setDisplayLogout] = useState('none');
    // const [displayLogin, setDisplayLogin] = useState('block');
    // const currentUser = useContext(LoggedUserContext);
    const [loggedin, setLoggedin] = useState(false);

    const [to, setTo] = useState('/login');
    const setCurrentUser = useContext(LoggedUserDispatchContext);
    useEffect(() => {
      if(user.accessToken === '') {
        setTo('/userslist');
      }
    }, [user]);
  
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // let txt = e.currentTarget.textContent;
    // if(txt === 'LOGOUT') {
    //   setCurrentUser({email: '', accessToken: ''});
    //   setTo('/login'); 
    //   e.currentTarget.textContent = 'Login';
    // }
    // else {
    //   if(user.accessToken === '') {
    //     setTo('/login');
    //     e.currentTarget.textContent = 'LOGIN';
    //   }
    //   else {
    //     setTo('/userslist');
    //     e.currentTarget.textContent = 'LOGOUT';
    //   }
      
    // }    
    if(loggedin) {
      setLoggedin(false);
      setCurrentUser({email: '', accessToken: ''});
    }
    else {
      setLoggedin(true);

    }
  }  
    
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit"><Link to='/userslist' style={{textDecoration: "none", color: "white"}}>Users</Link></Button>          
          
          <Typography variant="h6" className={classes.title}>
            {user && user.accessToken !== '' ? `Current user: ${user.email}`: 'Current user: Guest'}
          </Typography>
          <Button color="inherit" onClick={handleClick} >
            {
              loggedin ? <Link to='/userslist' style={{textDecoration: "none", color: "white"}}>Logout</Link> :
                         <Link to='/login' style={{textDecoration: "none", color: "white"}}>Login</Link>
            }
            {/* <Link to={to} style={{textDecoration: "none", color: "white"}}>
              Login
            </Link> */}
          </Button>
          {/* <Button color="inherit" onClick={handleClick} style={{display: displayLogout}}>
            <Link to={to} style={{textDecoration: "none", color: "white"}}>
              Logout
            </Link>
          </Button> */}
          {/* <Link to='/login'>Login</Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
