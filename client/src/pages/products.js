import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsSection from "../components/ProductsSection";

export default function Products() {
  const [products, setPorducts] = useState([]);
  useEffect(async () => {
    const chosenProducts = await axios.get("/products");
    setPorducts(chosenProducts.data);
  }, []);
  return (
    <div>
      <ProductsSection queryProducts={products} />
    </div>
  );
}
