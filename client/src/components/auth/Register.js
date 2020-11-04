import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/auth/actions';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();

    const params = {
      name,
      email,
      password,
      confirmPassword
    };

    dispatch(register(params))
      .then(response => {
        if (response.token) history.push('/');
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your account</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.name
                  })}
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.email
                  })}
                  placeholder="Email Address"
                  value={email}
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password
                  })}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames('form-control form-control-lg', {
                    'is-invalid': errors.password2
                  })}
                  placeholder="Confirm Password"
                  name="password2"
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                />
                {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
