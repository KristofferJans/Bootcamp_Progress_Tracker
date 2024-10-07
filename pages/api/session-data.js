import dbConnect from "@/db/connect";
import SessionData from "@/db/models/SessionData";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const sessionData = await SessionData.find({}); // Fetch all session-data by using ({})
      console.log("Fetched session-data:", sessionData); // Debug the fetched data
      return response.status(200).json(sessionData);
    } catch (error) {
      console.error("Error fetching session-data:", error);
      return response.status(500).json({ message: "Internal server error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
