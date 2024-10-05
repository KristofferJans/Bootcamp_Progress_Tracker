import mongoose from "mongoose";
import Session from "./Session";

const { Schema } = mongoose;

const challengeSchema = new Schema({
  challenge: { type: String, required: true },
  sessionName: { type: String, required: true },
  sessionId: { type: [Schema.Types.ObjectId], ref: "Session" },
});

const Challenge =
  mongoose.models.Challenge || mongoose.model("Challenge", challengeSchema);

export default Challenge;
