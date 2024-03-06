import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin, switchView }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const login = await axios.post('http://localhost:3000/api/users/login', { email, password });
      onLogin(login.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <input type="text" placeholder="email" onChange={(e) => setemail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p onClick={switchView}>Don't have an account? Sign up here.</p>
    </div>
  );
}

export default Login;
