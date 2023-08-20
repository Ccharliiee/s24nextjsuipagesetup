// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// api/newevent
import type { NextApiRequest, NextApiResponse } from "next";
import { MmongoClient } from "@/dbapihelper/mongodbclienthelper";

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

    try {
      await MmongoClient.connect();
      const db = MmongoClient.db();
      const eeventsCollection = db.collection("Eeventscc");
      const result = await eeventsCollection.insertOne(eeventsdata);
      console.log("You successfully connected to MongoDB!");
      console.log(result);
      res.status(201).json({ message: "eventdata inserted!" });
    } catch (err) {
      res.status(500).json({ error: "failed to insert eventdata" });
    } finally {
      await MmongoClient.close();
    }
  }
}
