import mongoose from "mongoose";

const { Schema } = mongoose;

const sessionSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  short: { type: String, required: true },
  long: { type: String, required: true },
  skills: { type: String, required: true },
});

const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);

export default Session;
