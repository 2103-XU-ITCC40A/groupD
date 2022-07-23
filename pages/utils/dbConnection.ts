import mongoose from "mongoose";

// DATABASE CONNECTION STRING
const databaseConnection = process.env.MONGODB_STRING_CONNECTION || "";
const databaseConnectionName = process.env.MONGODB_STRING_CONNECTION_NAME || "";
const databaseConnectionCredentials =
  process.env.MONGODB_STRING_CONNECTION_PASSWORD || "";
const databaseConnectionAccess =
  process.env.MONGODB_STRING_CONNECTION_ACCESSABILITY || "";

console.log(
  `${databaseConnection}${databaseConnectionName}${databaseConnectionAccess}`
);

// INITIALIZE DATABASE CONNECTION
const dbConnection = mongoose
  .connect(
    `${databaseConnection}${databaseConnectionName}${databaseConnectionAccess}`
  )
  .then((res) => {
    return res;
  })
  .catch(() => {
    throw new Error("Database connection error");
  });

export default dbConnection;
