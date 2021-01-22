import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import UsersList from './components/UsersList';

// <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="container">
          <CssBaseline/>
          <Container maxWidth="md">            
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/signup'>
                <Signup />
              </Route>
              <Route path='/userslist'>
                <UsersList />
              </Route>                            
            </Switch>
          </Container>          
        </div>                
      </div>
    </BrowserRouter>    
  );
}

export default App;
