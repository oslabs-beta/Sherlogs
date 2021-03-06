require('dotenv').config();
const createApp = require('./app');

const port = process.env.PORT;

const config = {
  mongoUrl: process.env.MONGODB_URL,
};

createApp(config).then((app) => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
