import React from "react";
// import styles from "./products.module.css";
import ProductCard from "./productCard";
import { Row } from "react-bootstrap";
import {getProducts} from "@/lib/route";


// export const revalidate = 5;
// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

const Products = async () => {
//   const products = await fetch(`https://dummyjson.com/products`).then((res) =>
//     res.json()
//   )
  const products = await getProducts();
  console.log("Products");

  return (
    < >
        {console.log(products)}
        <Row>
      {products.map((product) => (
        console.log(product.images[0]),
        <ProductCard
          key={product.id}
          name={product.title}
          image={product.images[0]}
          description={product.description}
          price={product.price}
        />
      ))}
      </Row>
    </>
  );
};

export default Products;
