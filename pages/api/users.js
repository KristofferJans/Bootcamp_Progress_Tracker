import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        try {
            const {id} = request.query;
            
        }
    }
}