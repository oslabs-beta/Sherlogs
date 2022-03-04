import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import axios from 'axios';

const LogFilter = ({ setState, state }) => {
  const handleLevelChange = (e) => {
    const { name } = e.target;
    setState({
      ...state,
      levels: [...state.levels, name],
    });
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;

    if (value === 'Last hour') {
      const hour = new Date();
      hour.setTime(hour.getTime() - 1000 * 60 * 60);
      setState({
        ...state,
        startSearch: hour,
        time: value,
      });
    } else if (value === 'Last day') {
      const day = new Date();
      day.setDate(day.getDate() - 1);
      setState({
        ...state,
        startSearch: day,
        time: value,
      });
    } else if (value === 'Last week') {
      const week = new Date();
      week.setDate(week.getDate() - 7);
      setState({
        ...state,
        startSearch: week,
        time: value,
      });
    } else if (value === 'Last month') {
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
    <div className=' bg-less-dark mr-3 ml-3 mt-5 pr-2 pl-2 rounded flex items-center justify-between shadow-md shadow-extra-dark'>
      <h3 className='mr-5 text-md font-medium font-semibold text-teal'>
        Filter logs
      </h3>
      <div>
        <Menu
          as='div'
          className='relative inline-block text-left py-2.5 px-2.5 ml-2'>
          <div>
            <Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-md font-medium text-teal bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              {state.time ? state.time : 'Time range'}
              <BiChevronDown
                className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-0 w-50 mt-2 origin-top-right bg-less-dark divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-teal' : 'text-teal'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      value='Last hour'
                      onClick={handleTimeChange}>
                      Last hour
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-teal' : 'text-teal'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      value='Last day'
                      onClick={handleTimeChange}>
                      Last day
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-teal' : 'text-teal'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      value='Last week'
                      onClick={handleTimeChange}>
                      Last week
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-teal' : 'text-teal'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      value='Last month'
                      onClick={handleTimeChange}>
                      Last month
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-teal' : 'text-teal'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      value='All time'
                      onClick={handleTimeChange}>
                      All time
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className='py-1 px-1 m-1'>
        {/* <h2 className='text-small font-semi-bold font-medium text-white'>
          Levels
        </h2> */}
        <input
          type='checkbox'
          name='error'
          className='rounded-md py-2.5 px-2.5 m-1'
          onClick={handleLevelChange}
        />
        <label className='rounded-md py-1 px-1 m-1 text-sm font-medium text-white'>
          Error
        </label>

        <input
          type='checkbox'
          name='warning'
          className='rounded-md py-2.5 px-2.5 m-1'
          onClick={handleLevelChange}
        />
        <label className='py-1 px-1 m-1 text-sm font-medium text-white'>
          Warning
        </label>

        <input
          type='checkbox'
          name='info'
          className='rounded-md py-2.5 px-2.5 m-1'
          onClick={handleLevelChange}
        />
        <label className='py-1 px-1 m-1 text-sm font-medium text-white'>
          Info
        </label>

        <input
          type='checkbox'
          name='debug'
          className='rounded-md py-2.5 px-2.5 m-1'
          onClick={handleLevelChange}
        />
        <label className='py-1 px-1 m-1 text-sm font-medium text-white'>
          Debug
        </label>
      </div>
      <div className='py-1 px-1 m-1'>
        <input
          placeholder='Enter keyword'
          type='text'
          className='w-full bg-dark h-9 rounded-md placeholder:text-lighter-blue placeholder:text-sm placeholder:pl-3 text-white text-sm font-medium'
          onChange={handleKeywordChange}></input>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className='text-med font-medium rounded-md py-1.5 px-1.5 text-dark bg-teal shadow-md shadow-dark hover:bg-red scale-90'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LogFilter;
