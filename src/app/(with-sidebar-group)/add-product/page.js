import React from "react";
import addProduct from "@/lib/addProduct";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "df1bpbfvm",
  api_key: "214588926694423",
  api_secret: "H-qHgvykNBegN6UlscU4eTY23AU", 
});
const AddProduct = () => {
  const create = async (formData) => {
    "use server";

    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload-sneakers"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    const images = [result.secure_url];
    const title = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    addProduct({ title, description, price, images });
    revalidatePath("/products");
    redirect("products");
  };

  return (
    <form className="p-3 border rounded shadow-sm" action={create}>
    <div className="form-group mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input className="form-control" id="name" name="name" type="text" required />
    </div>
  
    <div className="form-group mb-3">
      <label htmlFor="price" className="form-label">Price</label>
      <input className="form-control" id="price" name="price" type="number" min="0" required />
    </div>
  
    <div className="form-group mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea name="description" id="description" className="form-control" rows="4" required></textarea>
    </div>
  
    <div className="form-group mb-3">
      <label htmlFor="image" className="form-label">Image</label>
      <input type="file" name="image" id="image" className="form-control" accept="image/*" />
    </div>
  
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  
  );
};

export default AddProduct;