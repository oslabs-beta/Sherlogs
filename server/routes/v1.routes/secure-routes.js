//This code handles a GET request for profile. 
//It returns a "You made it to the secure route" message. 
//It also returns information about the user and token.
//The goal will be so that only users with a verified token will be presented with this response.

const express = require('express');
const router = express.Router();

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
