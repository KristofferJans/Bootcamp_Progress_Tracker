import dbConnect from "@/db/connect";
import Challenge from "@/db/models/Challenge";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const challenge = await Challenge.findById(id).populate("sessionId");

    if (!challenge) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(challenge);
  }
}
