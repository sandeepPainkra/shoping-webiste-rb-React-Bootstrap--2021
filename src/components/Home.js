import React from "react";
import { CartState } from "./Context/Context";
import SingleProduct from "./SingleProduct";
import "./Home.css";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => {
          return (
            <SingleProduct product={product} key={product.id} id={product.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
