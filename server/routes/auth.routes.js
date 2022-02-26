const express = require('express');
const authRouter = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { checkSignupInputs, checkLoginInputs } = require('../controllers/userController');

authRouter.post(
  '/signup', checkSignupInputs,
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user,
    });
  }
);
    
authRouter.post('/login', checkLoginInputs, async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = {
          log: 'Password is incorrect',
          status: 403,
          message: { err: 'An error occurred' },
        };
    
        return next(error);
      }
    
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
    
        const body = { _id: user._id, username: user.username };
        const token = jwt.sign({ user: body }, 'TOP_SECRET');
    
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});
  
module.exports = authRouter;