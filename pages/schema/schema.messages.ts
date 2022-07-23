import * as mongoose from "mongoose";

const message = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  messageContent: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("ateneo_messages", message);

export default Message;
