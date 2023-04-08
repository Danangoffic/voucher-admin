const env = require("dotenv");

env.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  dbUri: process.env.MONGO_URL,
  mode: process.env.MODE,
};
