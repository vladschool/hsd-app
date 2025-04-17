'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loginUser } from '../../store/slices/authSlice';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   const req =  await dispatch(loginUser({ username, password }));
   if(!req.error) router.push('/employees');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 border rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {auth.loading && (
          <div className="d-flex justify-content-center mt-3">
            <Spinner animation="border" />
          </div>
        )}
        {auth.error && <Alert variant="danger" className="mt-3">{auth.error}</Alert>}
      </div>
    </Container>
  );
}


export default Login;
