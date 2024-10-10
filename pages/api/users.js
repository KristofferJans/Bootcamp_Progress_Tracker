import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const userData = await User.findById(id).populate(
        "finishedChallenges progress.challengeId"
      );
      console.log("Fetched User-Data", userData);
      return response.status(200).json(userData);
    } catch (error) {
      console.error("Error fetching user-data:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
