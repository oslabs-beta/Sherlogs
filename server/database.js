const mongoose = require('mongoose');

async function connectDb(mongoUrl) {
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDb;
