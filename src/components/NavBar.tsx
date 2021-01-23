import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

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
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit"><Link to='/userslist' style={{textDecoration: "none", color: "white"}}>Users</Link></Button>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          
          <Typography variant="h6" className={classes.title}>
            Current user: Guest
          </Typography>
          <Button color="inherit"><Link to='/login' style={{textDecoration: "none", color: "white"}}>Login</Link></Button>
       
          {/* <Link to='/login'>Login</Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
