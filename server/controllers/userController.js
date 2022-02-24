const user = require('../models/user');

const userController = {};

userController.checkSignupInputs = async (req, res, next) => {
  try{
    const {username, password} = req.body;
    
    if(!username || username.length > 25 || !password || password.length < 8 || password.length > 16){
      const error = {
        log: 'Invalid username or password',
        status: 403,
        message: { err: 'An error occurred in userController.checkSignupInputs' },
      };
        
      return next(error);
    }

    const userFromDb = await user.findOne({username: username});

    if(userFromDb?.username === username){
      const error = {
        log: 'Invalid username or password',
        status: 409,
        message: { err: 'An error occurred in userController.checkSignupInputs' },
      };
      return next(error);
    }

    return next();
    
  }catch(err){
    return next(err);
  }
};

userController.checkLoginInputs = async (req, res, next) => {
  try{
    const {username, password} = req.body;
      
    if(!username || !password){
      const error = {
        log: 'Missing username or password',
        status: 400,
        message: { err: 'An error occurred in userController.checkLoginInputs' },
      };
    
      return next(error);
    }

    const userFromDb = await user.findOne({username: username});

    if(!userFromDb){
      const error = {
        log: 'Username does not exist',
        status: 400,
        message: { err: 'An error occurred in userController.checkSignupInputs' },
      };
      return next(error);
    }
    
    return next();

  }catch(err){
    return next(err);
  }
};

module.exports = userController;
