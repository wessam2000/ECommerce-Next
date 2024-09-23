import db from "./mongodb";
const addProduct = async (body) => {
  db.collection("products").insertOne(body);
};

export default addProduct;