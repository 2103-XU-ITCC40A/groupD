import * as mongoose from "mongoose";

const spotlights = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Spotlights = mongoose.model("ateneo_spotlights", spotlights);

export default Spotlights;
