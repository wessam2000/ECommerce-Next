import { MongoClient } from "mongodb";

let db;
if (!db) {
  const mongoClient = new MongoClient(
    "mongodb+srv://wessam:Ji82IKwuKcDVjiri@cluster0.nm0jafv.mongodb.net/NextJS?retryWrites=true&w=majority&appName=Cluster0"
  );
  const clientPromise = await mongoClient.connect();
  db = clientPromise.db();
}
export default db;
