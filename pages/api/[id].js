import dbConnect from "@/db/connect";
import SessionData from "@/db/models/SessionData";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const session = await SessionData.findById(id).populate("challenges");

    if (!session) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(session);
  }
}
