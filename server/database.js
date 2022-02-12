const mongoose = require('mongoose');

async function connectDb(mongoUrl) {
  try{
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      console.log('Connection to db successful')
    )
  }catch(err){
    console.log(`Problem with db connection: ${err}`);
  }
}

module.exports = connectDb;
