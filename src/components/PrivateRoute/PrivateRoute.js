import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;