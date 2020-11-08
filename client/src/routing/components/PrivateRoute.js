import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import App from 'components/layout/App';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? (
    <Route {...rest}>
      <App>
        <Component />
      </App>
    </Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
