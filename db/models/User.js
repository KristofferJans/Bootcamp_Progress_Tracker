import mongoose from "mongoose";

const { Schema } = mongoose;

const progressSchema = new mongoose.Schema({
  challenge_id: { type: Schema.Types.ObjectId, required: false },
  points: { type: Number, min: 1, max: 4, required: false },
});

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    emailVerified: { type: String, required: true }, //??
    finishedChallenges: [{ type: Schema.Types.ObjectId, ref: "Challenge" }],
    progress: [
      {
        challenge_id: {
          type: Schema.Types.ObjectId,
          required: false,
          ref: "Challenge",
        },
        progressLevel: { type: Number, min: 1, max: 4, required: false },
      },
    ],
  },
  { collection: "users" } // Explicitly refer to the correct collection
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
