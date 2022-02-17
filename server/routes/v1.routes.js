const express = require('express');
const Router = express.Router();

const logController = require('../controllers/logController');

Router.post('/log/store', logController.storeLog, (req, res, next) => {
  const { logId } = res.locals;

  //   return res.status(200).send('stored log');
  return res.status(200).json({ logId });
});

module.exports = Router;
