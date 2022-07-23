import { Schema, model, models } from "mongoose";

const spotlights = new Schema({
  imageName: {
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

const Spotlights =
  models.ateneo_spotlights || model("ateneo_spotlights", spotlights);

export default Spotlights;
