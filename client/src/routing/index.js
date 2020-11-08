import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from 'store/auth/actions';
import { landing } from './routes/landing';
import { user } from './routes/user';

import paths from './routes/_paths';
import PrivateRoute from 'routing/components';
import PublicRoute from 'routing/components';

const routes = [...landing, ...user];

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, type, ...rest }, index) =>
          type === 'private' ? (
            <PrivateRoute key={index} component={Component} {...rest} />
          ) : (
            <PublicRoute key={index} component={Component} {...rest} />
          )
        )}
        <Redirect to={paths.notFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
