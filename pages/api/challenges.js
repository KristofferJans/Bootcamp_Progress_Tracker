import dbConnect from "@/db/connect";
import Challenge from "@/db/models/Challenge";

export default async function handler(request, response) {
  await dbConnect();
  // const { id } = request.query;

  if (request.method === "GET") {
    console.log("challeng!!!!");
    const challenge = await Challenge.find().populate("sessionId");
    if (!challenge) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(challenge);
  }
}
