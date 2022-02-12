const express = require('express');
const defaultError = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' },
};

function errorHandler(err, req, res, next) {
  console.log(err);
  const errorObj = { ...defaultError, err };
  return express.json({
    status: errorObj.status,
    message: errorObj.message,
  });
}

module.exports = errorHandler;
