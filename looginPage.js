import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token'); // agar pehle se login hai
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {      // <-- headers object
        'Content-Type': 'application/json', // <-- content-type
        'Authorization': `Bearer ${token}`  // <-- Authorization
      },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
