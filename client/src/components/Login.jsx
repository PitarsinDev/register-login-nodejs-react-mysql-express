import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='p-10'>
        <h2 className='text-indigo-600 text-2xl'>Login</h2>
        <div className='bg-indigo-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
      <div className='flex justify-center my-2'>
        <input
            type="text"
            placeholder="Username"
            value={username}
            className='border border-indigo-600 rounded-md pl-2'
            onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='flex justify-center my-2'>
        <input
            type="password"
            placeholder="Password"
            value={password}
            className='border border-indigo-600 rounded-md pl-2'
            onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex justify-center'>
      <button onClick={handleLogin} className='text-white bg-indigo-600 px-5 py-1 rounded-md shadow-md'>Login</button>
      </div>
      <div className='flex justify-center p-5'>
        <a href="/register" className='text-indigo-600 text-xs'>register</a>
      </div>
    </div>
  );
};

export default Login;