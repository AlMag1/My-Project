import React from 'react';
import { Input, Form, FormGroup } from 'reactstrap';

const LoginForm = ({ email, password, setEmail, setPassword }) => {
  return (
    <Form>
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          autoComplete="on"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          autoComplete="on"
        />
      </FormGroup>
    </Form>
  );
};

export default LoginForm;
