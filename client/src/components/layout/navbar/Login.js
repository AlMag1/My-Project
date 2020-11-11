import React, { useState } from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { login } from 'store/auth/actions';

import Form from './Form';

const Login = ({ toggle, open }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearState = () => {
    setEmail('');
    setPassword('');
  };

  const loginUser = () => {
    const params = {
      email,
      password
    };

    dispatch(login(params)).then(res => {
      if (res.id) {
        toggle();
        clearState();
      }
    });
  };
  return (
    <Modal isOpen={open} toggle={toggle} className="login-modal">
      <ModalHeader toggle={toggle} className="align-items-center login-modal__header">
        Είσοδος
      </ModalHeader>
      <ModalBody className="login-modal__body">
        <Form email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
      </ModalBody>
      <ModalFooter className="login-modal__footer">
        <Button color="primary" onClick={loginUser} className="login-proceed">
          Είσοδος
        </Button>
        <Button color="secondary" onClick={toggle} className="login-cancel">
          Ακύρωση
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Login;
