import mongoose from "mongoose";
import "./SessionData";

const { Schema } = mongoose;

const challengeSchema = new Schema(
  {
    challenge: { type: String, required: true },
    sessionName: { type: String, required: true },
    sessionId: { type: Schema.Types.ObjectId, ref: "SessionData" },
  },
  { collection: "challenges-data" } // Explicitly refer to the correct collection
);

const Challenge =
  mongoose.models.Challenge || mongoose.model("Challenge", challengeSchema);

export default Challenge;
