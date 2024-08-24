import Link from "next/link";
import React from "react";

const ProductList = () => {
  const productList = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <Link href="/products/1">Product 1</Link>
      {productList.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
