import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadUser } from './store/auth/actions';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={isAuthenticated} />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppWrapper;
