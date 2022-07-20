import * as mongoose from "mongoose";

const news = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  timeDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
});

const News = mongoose.model("ateneo_news", news);

export default News;
