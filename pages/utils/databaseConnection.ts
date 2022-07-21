import mongoose from "mongoose";

// DATABASE CONNECTION
const databaseConnectionCredentials = process.env.DATABASE_CONNECTION_CREDENTIALS || "";

// INITIALIZE DATABASE CONNECTION
const dbConnection = mongoose
  .connect(databaseConnectionCredentials)
  .then((res) => {
    return res;
  })
  .catch((err) => {
    return err;
  });

export default dbConnection;
