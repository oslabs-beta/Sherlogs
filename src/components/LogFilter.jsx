import React, { useState } from 'react';
import axios from 'axios';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
} from '@mui/material';

const LogFilter = () => {
  const [state, setState] = useState({
    time: '',
    // error: false,
    // warn: false,
    // info: false,
    // http: false,
    // verbose: false,
    // debug: false,
    // silly: false,
    levels: [],
    keyword: '',
  });

  const handleLevelChange = (e) => {
    const { name, checked } = e.target;
    // setState({
    //   ...state,
    //   [name]: checked,
    // });
    setState({
      ...state,
      levels: [...state.levels, name],
    });
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      time: value,
    });
  };

  const handleKeywordChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      keyword: value.toLowerCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('state on submit', state);
    // axios
    // .get
  };

  return (
    <div className='flex items-center justify-between'>
      <h3>Log Search</h3>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Time range</InputLabel>
          <Select
            value={state.time}
            label='time-range'
            onChange={handleTimeChange}>
            <MenuItem value='hour'>Last hour</MenuItem>
            <MenuItem value='day'>Last day</MenuItem>
            <MenuItem value='week'>Last Week</MenuItem>
            <MenuItem value='month'>Last month</MenuItem>
            <MenuItem value='all'>All time</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        label='Keyword'
        variant='outlined'
        onChange={handleKeywordChange}
      />

      <FormGroup className='flex flex-row' row={true}>
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='error' />}
          label='Error'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='warn' />}
          label='Warn'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='info' />}
          label='Info'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='http' />}
          label='Http'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='verbose' />}
          label='Verbose'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='debug' />}
          label='Debug'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='silly' />}
          label='Silly'
        />
      </FormGroup>

      <Button variant='contained' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default LogFilter;
