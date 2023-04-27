import mongoose from "mongoose";

const scenarioSchema = new mongoose.Schema({
  text: String,
});

export const scenarioModel = mongoose.model("scenario", scenarioSchema);
