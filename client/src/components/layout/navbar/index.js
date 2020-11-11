import React, { useState } from 'react';

import { Col, Row } from 'reactstrap';
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
        <Col xs={3} className="header-left-section">
          <div>LOGO</div>
        </Col>
        <Col className="d-flex justify-content-end header-right-section">
          <div className="mr-2">Προϊόντα</div>
          <div className="mr-2">Σχετικά με εμάς</div>
          <div className="mr-2">Καλάθι</div>
          <div onClick={isAuthenticated ? () => dispatch(logout()) : toggle}>
            {isAuthenticated ? 'Έξοδος' : 'Είσοδος'}
          </div>
        </Col>
      </Row>

      <Login toggle={toggle} open={open} />
    </>
  );
};

export default NavBar;
