import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsSection from "../components/ProductsSection";
import SideMenu from "../components/SideMenu";
import Content from "../components/Content";

export default function Products() {
  const [products, setPorducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    const allProducts = await axios.get("/products");
    setPorducts(allProducts.data);
    setLoading(false);
  }, []);

  const categoryHandler = async (e) => {
    let chosenProducts = "";
    const category = e.target.innerText.toLowerCase();
    if (category === "all") {
      chosenProducts = await axios.get("/products");
    } else {
      chosenProducts = await axios.get(`/products/category/${category}`);
    }
    setPorducts(chosenProducts.data);
  };

  return (
    <Content>
      <SideMenu handler={categoryHandler} />
      <ProductsSection queryProducts={products} loading={loading} />
    </Content>
  );
}
