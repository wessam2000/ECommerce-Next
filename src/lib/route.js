// import { ObjectId } from "mongodb";
import db from "./mongodb";

export const getProducts = async () => {
  // db.collection("products").deleteOne({
  //   _id: new ObjectId("66f0b040d9b51b338135258c"),
  // });
  return await db.collection("products").find().toArray();
};

export const getProductsById = async (id) => {
  return await db.collection("products").findOne({ id });
};
