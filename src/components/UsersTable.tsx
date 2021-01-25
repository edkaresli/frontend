import React, { useState, useEffect, useContext, MouseEvent } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UpdateUser from './UpdateUser';
import { LoggedUserContext } from '../contexts/UserContext';
import { LoggedUserDispatchContext } from '../App';
import { User } from '../interfaces/User';
import axios from 'axios';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(name: string, email: string, cancelButton: string) {
  return { name, email, cancelButton };
}

const rows = [
  createData('John Smith', 'john.smith@gmail.com', '<Button>X</Button>'),
  createData('Donald Duck', 'donald.duck@disney.com', '<Button>X</Button>'),
  createData('Daffy Duck', 'daffy.duck@warnerbros.com', '<Button>X</Button>')  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const [users, setUsers] = useState<User[]>([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const currentUser = useContext(LoggedUserContext);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e: any) => {
      
  }
  
  useEffect(() => {
    console.log("Current user: ", currentUser);
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser.accessToken}`;
    axios.defaults.headers.get['Content-Type'] = 'application/json';
      
    const results = axios.get(`${axios.defaults.baseURL}/users`);
    results.then(response => {
      setUsers(response.data);
      console.log("data: ", response.data);
    })
    .catch(e => {
      console.error(e);
    })
  }, [currentUser]);
  
  const handleDelete = (id: string/*e: MouseEvent<HTMLButtonElement>*/) => {
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser.accessToken}`;
    axios.defaults.headers.delete['Content-Type'] = 'application/json';
    const result = axios.delete(`${axios.defaults.baseURL}/users/${id}`);
    result.then(response => {
      console.table(response.data);
      // setUser({firstName: '', lastName: '', email: '', password: ''});
      // setUpdate(true);
      const fetch = axios.get(`${axios.defaults.baseURL}/users`);
      fetch.then(response => {
        setUsers(response.data);
      })
      .catch(e => {
        alert(e);
        console.error(e);
      })
    })
    .catch(e => {
      console.error(e);
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User name</StyledTableCell>
            <StyledTableCell align="right">E-mail</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <Button onClick={handleClick}>{`${row.firstName} ${row.lastName}`}</Button>
                <UpdateUser onClose={handleClick} open={open} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={e => handleDelete(row.id)}>X</Button></StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}