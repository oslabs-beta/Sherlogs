import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import { Button, TextField } from '@mui/material';

const Signup = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [inputError, setInputError] = useState(false);
  //   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      axios
        .post('http://localhost:3300/apiv1/auth/signup', {
          username: state.username,
          password: state.password,
        })
        .then((res) => {
            console.log(res);
          if (res.data.status === 409) {
            setInputError('Username already in use.');
          }
          if (res.data.status === 403) {
            setInputError('Error creating account. Check input fields.');
          }
          if (!res.data.status && res.status === 200) {
            setInputError('Signup Successful');
            //reroute here using navigate
          }
        })
        .catch((err) => {
          console.error('err in signup request:', err.response);
        });
    } else {
      setInputError('Passwords do not match. Please try again.');
    }
  };
  return (
    <div className='flex h-screen bg-white'>
      <div className='w-full max-w-xs m-auto bg-gray-300 rounded p-5'>
        <header>
          <FiUserPlus className='h-10 w-10 text-blue-500 mx-auto mb-5' />
        </header>
        <form id='signup'>
          <div>
            <TextField
              required
              label='Username'
              placeholder='Enter username'
              name='username'
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <TextField
              required
              label='Password'
              placeholder='Enter password'
              type='password'
              name='password'
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <TextField
              required
              label='Confirm password'
              placeholder='Enter password'
              type='password'
              name='confirmPassword'
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <Button variant='contained' onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
        <footer>
          <div className='text-center w-full text-red-900 font-bold py-2 px-4 mb-6 rounded'>
            {inputError && inputError}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
