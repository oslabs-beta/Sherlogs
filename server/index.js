require('dotenv').config();
const createApp = require('./app');

const port = process.env.PORT;
const config = {
  //mongoUrl: // TODO: Create the db and put the env variable with the url here
};

createApp(config).then((app) => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
