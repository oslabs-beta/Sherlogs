import React, { useState } from 'react';
import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
import { FiUserCheck } from 'react-icons/fi';
import { Button, TextField } from '@mui/material';

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [inputError, setInputError] = useState(false);
  //   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3300/apiv1/auth/login', {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 403) {
          setInputError('Username or passcord incorrect.');
        }
        if (res.data.status === 400) {
          setInputError('Error logging in. Please check username and password inputs.');
        }
        if (!res.data.status && res.status === 200) {
          setInputError('Login Successful');
          //reroute here using navigate
        }
      })
      .catch((err) => {
        console.error('err in login request:', err.response);
        setInputError(true);
      });
  };

  return (
    <div className='flex h-screen bg-white'>
      <div className='w-full max-w-xs m-auto bg-gray-300 rounded p-5'>
        <header>
          <FiUserCheck className='h-10 w-10 text-blue-500 mx-auto mb-5' />
        </header>
        <form>
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
            <Button variant='contained' onClick={handleSubmit}>
              Submit
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

export default Login;
