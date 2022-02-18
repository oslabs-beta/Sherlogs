const express = require('express');
const Router = express.Router();

const logController = require('../controllers/logController');

Router.post('/log/store', logController.storeLog, (req, res, next) => {
  const { logStored } = res.locals;
  return res
    .status(201)
    .json({ logStored })
    .send('successfully store log into the database');
});

module.exports = Router;
