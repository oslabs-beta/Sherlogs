import React, { useState, setState } from 'react';
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
} from '@mui/material';

//filtering
//filter by keyword

const LogFilter = () => {
  const [time, setTime] = useState('');

  const handleLevelChange = (e) => {
    console.log(e.target.name, e.target.checked);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    console.log(e.target.value);
  };

  const handleKeywordChange = (e) => {
    console.log(e.target.value);
  };

  return (
    // <div className='border 2px grid grid-rows-2 grid-flow-col gap-4'>
    <div className='flex items-center justify-between'>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Time range</InputLabel>
          <Select value={time} label='time-range' onChange={handleTimeChange}>
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
    </div>
  );
};

export default LogFilter;
