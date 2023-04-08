import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Common/Card/Card";
import styles from "./Products.module.css";
import Search from "../Common/Search/Search";

export default function Products() {
  let [products, setProducts] = useState([]);
  let [results, setResults] = useState([]);
  const getProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    setResults(data); 
  };
  useEffect(() => {
    getProducts();
    
  },[]);
  return (
    <div
      className={`d-flex justify-content-center flex-column align-items-center flex-wrap ${styles.ProductPage}`}
    >
    <Search setResults={setResults} header='All Products' inputs={products}/>
      <div className="d-flex flex-wrap justify-content-evenly">
        {results.map((product, index) => {
            return (
              <Card key={index} product={product}/>
            );
          })}
      </div>
    </div>
  );
}
