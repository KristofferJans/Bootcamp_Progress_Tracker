import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const userData = await User.findById(id).populate("finishedChallenges");

      if (!userData) {
        return response.status(404).json({ message: "User not found" });
      }

      console.log("Fetched User-Data", userData);
      return response.status(200).json(userData);
    } catch (error) {
      console.error("Error fetching user-data:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }

  if (request.method === "PATCH") {
    try {
      const { challengeId, progressLevel } = request.body;

      // Find the user by ID
      const user = await User.findById(id);
      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }

      // Check if the challenge is already in progress

      // Without toString(), the comparison would fail because we're comparing
      // an ObjectId with a string, which are different types.
      const existingProgress = user.progress.find(
        (progress) => progress.challengeId.toString() === challengeId
      );

      if (existingProgress) {
        // Update the progress level for the existing challenge
        existingProgress.progressLevel = progressLevel;
      } else {
        // Add new progress entry
        user.progress.push({ challengeId, progressLevel });
      }

      if (progressLevel === 4) {
        user.finishedChallenges.push(challengeId);
      }
      // Save the updated user
      await user.save();

      return response
        .status(200)
        .json({ message: "Progress updated successfully", user });
    } catch (error) {
      console.error("Error updating user progress:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}
