const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@rajecluster.o4zia.mongodb.net/EMP?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    const host = mongoose.connection.host;
    console.log('MongoDB Connected :' + host);
  } catch (err) {
    console.log('MongoDB Connection Failed :' + err);
    process.exit(1);
  }
};

module.exports = ConnectDB;
