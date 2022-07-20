import mongoose from "mongoose";

const dbConnection = mongoose
  .connect("mongodb://localhost:27017/xavier")
  .then((res) => {
    return res;
  })
  .catch((err) => {
    return err;
  });

export default dbConnection;
