import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../Welcome';

class Landing extends Component {
    // state = {
    //     loggedIn: false,
    // };

    // componentDidMount() {
    //     //  this.setState({loggedIn: localStorage.getItem("token")})
    //     // console.log(this.props);
    //     const token = localStorage.getItem('token');
    //     // console.log(token);
    //     if (token) this.setState({ loggedIn: true });
    // }

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Welcome</h1>
                                <hr />
                                <Link
                                    to="/register"
                                    className="btn btn-lg btn-info mr-2">
                                    Sign Up
                                </Link>
                                <Link
                                    to="/login"
                                    className="btn btn-lg btn-light">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <Welcome />
        );
    }
}

export default Landing;
