import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='p-10'>
        <h2 className='text-indigo-600 text-2xl'>Register</h2>
        <div className='bg-indigo-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
      <div className='flex justify-center my-2'>
        <input
            type="text"
            placeholder="Username"
            value={username}
            className='border border-indigo-600 pl-2 rounded-md'
            onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='flex justify-center my-2'>
        <input
            type="password"
            placeholder="Password"
            value={password}
            className='border border-indigo-600 pl-2 rounded-md'
            onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex justify-center p-5'>
      <button onClick={handleRegister} className='bg-indigo-600 text-white shadow-md px-5 py-1 rounded-md'>Register</button>
      </div>
      <div className='flex justify-center p-5'>
        <a href="/login" className='text-indigo-600 text-xs'>login</a>
      </div>
    </div>
  );
};

export default Register;