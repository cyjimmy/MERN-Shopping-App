import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setPorducts] = useState();
  useEffect(() => {
    setPorducts(axios.get("/products"));
  }, []);
  return <div>Products</div>;
}
