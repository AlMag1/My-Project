import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from 'store/auth/actions';
import { landing } from './routes/landing';
import { user } from './routes/user';

import paths from './routes/_paths';
import App from 'components/layout/App';

const routes = [...landing, ...user];

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, ...rest }, index) => (
          <Route key={index} {...rest}>
            <App>
              <Component />
            </App>
          </Route>
        ))}
        <Redirect to={paths.notFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
