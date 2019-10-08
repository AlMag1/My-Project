import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// const token = localStorage.getItem('token');

class Navbar extends Component {
    state = {
        loggedIn: false,
    };

    // componentDidMount() {
    //     if (token) {
    //         this.setState({ loggedIn: true });
    //     } else {
    //         this.setState({ loggedIn: false });
    //     }
    // }

    logout = () => {
        localStorage.removeItem('token');
        this.setState({ loggedIn: false });
        this.props.history.push('/login');
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            Home
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="mobile-nav">
                            {/* <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to="/profiles" className="nav-link">
                                            {' '}
                                            Developers
                                        </Link>
                                    </li>
                                </ul> */}
                            {this.props.loggedIn ? (
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <div
                                            className="nav-link"
                                            onClick={this.logout}>
                                            Logout
                                        </div>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link
                                            to="/register"
                                            className="nav-link">
                                            Sign Up
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navbar);
