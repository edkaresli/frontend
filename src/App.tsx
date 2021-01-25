import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import UsersList from './components/UsersList';
import { LoggedUserContext, LoggedUserType } from './contexts/UserContext';
import { LoggedUser } from './interfaces/User';

// <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
export let LoggedUserDispatchContext: React.Context<React.Dispatch<React.SetStateAction<LoggedUserType>>>;

function App() {
  const [currentUser, setCurrentUser] = useState<LoggedUserType>({ email: '', accessToken: ''});
  // const data = useContext(LoggedUserContext);
  LoggedUserDispatchContext = createContext<React.Dispatch<React.SetStateAction<LoggedUserType>>>(setCurrentUser);
  console.log("Data: ", currentUser);
  return (
    <BrowserRouter>
      <div className="App">
        <LoggedUserContext.Provider value={currentUser}>
          <LoggedUserDispatchContext.Provider value={setCurrentUser}>
            <NavBar />
            <div className="container">
              <CssBaseline/>
              <Container maxWidth="md">            
                <Switch>
                  <Route exact path='/'>
                    <Login />
                  </Route>
                  <Route exact path='/login'>
                    {currentUser.accessToken === '' ? <Login /> : <Redirect to="/userslist"/>}
                  </Route>
                  <Route exact path='/signup'>
                    <Signup />
                  </Route>
                  <Route exact path='/userslist'>
                    {currentUser.accessToken !== '' ? <UsersList /> : <Redirect to='/login'/>}
                  </Route>                            
                </Switch>
              </Container>          
            </div>
          </LoggedUserDispatchContext.Provider>          
        </LoggedUserContext.Provider>                         
      </div>
    </BrowserRouter>    
  );
}

export default App;
