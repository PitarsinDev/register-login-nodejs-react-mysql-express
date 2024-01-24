import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <div class='flex justify-center'>
        <div class="p-10">
          <h1 class='text-indigo-600 text-3xl'>
            Login Register
          </h1>
          <div class='bg-indigo-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
      <div class='flex justify-center gap-5'>
        <a href="/login" class='text-white bg-indigo-600 px-5 py-1 text-xs rounded-md shadow-md'>
          Login
        </a>
        <a href="/register" class='text-white bg-indigo-600 px-5 py-1 text-xs rounded-md shadow-md'>
          Register
        </a>
      </div>
    </>
  );
};

export default App;