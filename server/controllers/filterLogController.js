const User = require('../models/logs');
const Logs = require('../models/logs');
const path = require('path');
const errorHandler = require(path.resolve(__dirname, '../utils/errorHandling'));

const filterLogController = {};

filterLogController.filter = async(req, res, next) => {
 try {const target = req.params['target'];

  const data = } catch(err) {
; 
  }
};

module.exports = filterLogController;
