import mongoose from "mongoose";

// DATABASE CONNECTION
const databaseConnectionCredentials =
  process.env.DATABASE_CONNECTION_CREDENTIALS || "";

// INITIALIZE DATABASE CONNECTION
const dbConnection = mongoose
  .connect("mongodb://localhost:27017/xavier")
  .then((res) => {
    return res;
  })
  .catch((err) => {
    throw new Error(`Database connection error: ${err}`);
  });

// DISCONNECT DATABASE CONNECTION FOR TESTING PURPOSES
// mongoose.connection.close();

export default dbConnection;
