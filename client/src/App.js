import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Welcome from './components/Welcome';
import { Provider } from 'react-redux';
import store from './store';

const token = localStorage.getItem('token');

class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    if (token) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar loggedIn={this.state.loggedIn} />
            <Route exact path="/" component={this.state.loggedIn ? Welcome : Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
