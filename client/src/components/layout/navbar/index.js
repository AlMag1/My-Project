import React, { useState } from 'react';

import { Button, Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'store/auth/actions';

import Login from './Login';

const NavBar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <Row className="no-gutters align-items-center">
        <Col>
          <div>LOGO</div>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button onClick={isAuthenticated ? () => dispatch(logout()) : toggle}>
            {isAuthenticated ? 'LOGOUT' : 'LOGIN'}
          </Button>
        </Col>
      </Row>

      <Login toggle={toggle} open={open} />
    </>
  );
};

export default NavBar;
