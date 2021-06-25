import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Seats from './components/Seats/Seats';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

function App(props) {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavigationBar info={loggedInUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/seats">
            <Seats />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
