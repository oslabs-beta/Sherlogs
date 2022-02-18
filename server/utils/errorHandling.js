const express = require('express');
const defaultError = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' },
};

const errorHandler = (err, req, res, next) => {
  console.log(err);
  const errorObj = { ...defaultError, err };
  res.json(defaultError);
};

module.exports = errorHandler;
