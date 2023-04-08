import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Common/Card/Card";
import styles from "./Products.module.css";

export default function Products() {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  const getProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    console.log(data);
    
  };
  useEffect(() => {
    getProducts();
    
  },[]);
  return (
    <div
      className={`d-flex justify-content-center flex-column align-items-center flex-wrap ${styles.ProductPage}`}
    >
      <h2 className="mt-5 text-bold h2">All Products</h2>
      {/* <h4 className="mb-4 h4">Search Products By Name:</h4> */}
      <input
        type="search"
        className={styles.input}
        name="pname"
        value={search}
        placeholder="Search products By Name"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="d-flex flex-wrap justify-content-evenly">
        {products
          .filter((product) => {
            if (search === "") {
              return product;
            } else if (
              product.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product, index) => {
            return (
              <Card
                key={index}
                // title={product.title}
                // price={product.price}
                // img={product.image}
                product={product}
              />
            );
          })}
      </div>
    </div>
  );
}
