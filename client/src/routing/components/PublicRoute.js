import React from 'react';

import { Route } from 'react-router-dom';
import App from 'components/layout/App';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <App>
        <Component />
      </App>
    </Route>
  );
};

export default PublicRoute;
