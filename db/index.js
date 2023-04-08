const mongoose = require("mongoose");
const { dbUri } = require("../config");

console.log("connecting with mongo db url : ", dbUri);
(async () => {
  try {
    await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.log("failed to connect with mongodb with error : ", error);
  }
})();

const db = mongoose.connection;

module.exports = db;
