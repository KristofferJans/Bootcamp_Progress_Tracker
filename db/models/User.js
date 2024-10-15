import mongoose from "mongoose";
import "./Challenge";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    emailVerified: { type: Date, default: null }, //??
    finishedChallenges: [{ type: Schema.Types.ObjectId, ref: "Challenge" }],
    progress: [
      {
        challengeId: {
          type: Schema.Types.ObjectId,

          ref: "Challenge",
        },
        progressLevel: { type: Number, min: 1, max: 4 },
      },
    ],
  },
  { collection: "users" } // Explicitly refer to the correct collection
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
