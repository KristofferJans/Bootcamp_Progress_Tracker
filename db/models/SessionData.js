import mongoose from "mongoose";

const { Schema } = mongoose;

const sessionDataSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    short: { type: String, required: true },
    long: { type: String, required: true },
    skills: { type: [String], required: true },
  },
  { collection: "session-data" } // Explicitly refer to the correct collection
);

const SessionData =
  mongoose.models.SessionData ||
  mongoose.model("SessionData", sessionDataSchema);

export default SessionData;
