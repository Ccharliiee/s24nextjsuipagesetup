// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// api/newevent
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const eeventsdata = req.body;

    const client = new MongoClient(process.env.MONGODB_URL ?? "", {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await client.connect();
      const db = client.db();
      const eeventsCollection = db.collection("Eeventscc");
      const result = await eeventsCollection.insertOne(eeventsdata);
      console.log("You successfully connected to MongoDB!");
      console.log(result);
      res.status(201).json({ message: "eventdata inserted!" });
    } catch (err) {
      res.status(500).json({ error: "failed to insert eventdata" });
    } finally {
      await client.close();
    }
  }
}
