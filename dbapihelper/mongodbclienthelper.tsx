import { MongoClient, ServerApiVersion } from "mongodb";

export const MmongoClient = new MongoClient(process.env.MONGODB_URL ?? "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
