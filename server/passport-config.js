const db = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;
const brypt = require('bcrypt');
//do we want to encrypt user email??

const SALT_WORK_FACTOR = 10;

//passport strategy for user sign up
const initialize = (passport) => {
    passport.use(
        'local-signup',
        new LocalStrategy(
            {
                usernameField: 'username',
                passwordField: 'password',
                passReqToCallback: true
            },
            async (req, username, password, done) => {
                //need to use find one bc it can be falsey
                //if find one false --> query to add
                try {
                    const hashedPassword = await brypt.hash(password, SALT_WORK_FACTOR);
                } 

            }
        )
    )
}


                //make sure user name is unique 
                //query db to make sure user email does not exist before query to insert 