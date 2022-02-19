const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user,
    });
  }
);
  
router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        // console.log(err)
        const error = {
          log: 'incorrect login',
          status: 400,
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

//This code handles a GET request for profile. 
//It returns a "You made it to the secure route" message. 
//It also returns information about the user and token.
//The goal will be so that only users with a verified token will be presented with this response.
router.get(
  '/profile',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    });
  }
);
  
module.exports = router;
  