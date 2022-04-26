require('dotenv').config();
const createApp = require('./app');

const port = process.env.NODE_DOCKER_PORT;

const config = {
  mongoUrl: process.env.MONGODB_URL,
};

createApp(config).then((app) => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
