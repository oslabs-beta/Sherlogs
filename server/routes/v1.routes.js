const express = require('express');
const Router = express.Router();
const authRouter = require('./auth.routes');

Router.use('/auth', authRouter);

//This code handles a GET request for profile. 
//It returns a "You made it to the secure route" message. 
//It also returns information about the user and token.
//The goal will be so that only users with a verified token will be presented with this response.
Router.get(
  '/profile',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    });
  }
);

const logController = require('../controllers/logController');

Router.post('/log/store', logController.storeLog, (req, res, next) => {
  const { logStored } = res.locals;

  return res
    .status(201)
    .json({
      status: true,
      log: logStored,
      message: 'Successfully stored log into DB',
    })
    .render('Successfully stored log into DB');
});

module.exports = Router;
