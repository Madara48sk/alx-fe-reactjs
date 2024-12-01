import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Simulate Login</button>
    </div>
  );
};

export default Login;