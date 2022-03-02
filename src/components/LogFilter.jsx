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

const LogFilter = ({setState, state}) => {
  // const [state, setState] = useState({
  //   time: '',
  //   levels: [],
  //   keyword: '',
  //   queryTime: new Date(),
  //   startSearch: '',
  // });

  const handleLevelChange = (e) => {
    const { name } = e.target;
    setState({
      ...state,
      levels: [...state.levels, name],
    });
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;

    if (value === 'hour') {
      const hour = new Date();
      hour.setTime(hour.getTime() - 1000 * 60 * 60);
      setState({
        ...state,
        startSearch: hour,
        time: value,
      });
    } else if (value === 'day') {
      const day = new Date();
      day.setDate(day.getDate() - 1);
      setState({
        ...state,
        startSearch: day,
        time: value,
      });
    } else if (value === 'week') {
      const week = new Date();
      week.setDate(week.getDate() - 7);
      setState({
        ...state,
        startSearch: week,
        time: value,
      });
    } else if (value === 'month') {
      const month = new Date();
      month.setDate(month.getDate() - 30);
      setState({
        ...state,
        startSearch: month,
        time: value,
      });
    } else {
      setState({
        ...state,
        time: value,
      });
    }
  };

  const handleKeywordChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      keyword: value.toLowerCase(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('state on submit', state);
    // axios
    // .get
  };

  return (
    <div className='flex items-center justify-between'>
      <h3 className='mr-5'>Log Search</h3>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Time range</InputLabel>
          <Select
            value={state.time}
            label='time-range'
            onChange={handleTimeChange}>
            <MenuItem value='hour'>Last hour</MenuItem>
            <MenuItem value='day'>Last day</MenuItem>
            <MenuItem value='week'>Last week</MenuItem>
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

      <FormGroup className='flex flex-row ml-5' row={true}>
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='error' />}
          label='Error'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='warning' />}
          label='Warning'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='info' />}
          label='Info'
        />
        <FormControlLabel
          control={<Checkbox onChange={handleLevelChange} name='debug' />}
          label='Debug'
        />
      </FormGroup>

      <Button variant='contained' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default LogFilter;
