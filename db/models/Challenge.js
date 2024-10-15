import mongoose from "mongoose";

const { Schema } = mongoose;

const challengeSchema = new Schema(
  {
    challenge: { type: String, required: true },
    sessionName: { type: String, required: true },
  },
  { collection: "challenges-data" } // Explicitly refer to the correct collection
);

const Challenge =
  mongoose.models.Challenge || mongoose.model("Challenge", challengeSchema);

export default Challenge;
