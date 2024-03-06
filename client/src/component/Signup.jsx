import React, { useState } from 'react';
import axios from 'axios';

function Signup({ onLogin, switchView }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nationality, setNat] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/signup', { name, nationality ,password,email});
      onLogin(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Signup">
      <h2>Sign Up</h2>
      <input type="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="email" onChange={(e) => setemail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="nationality" placeholder="nationality" onChange={(e) => setNat(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <p onClick={switchView}>Already have an account? Log in here.</p>
    </div>
  );
}

export default Signup;
