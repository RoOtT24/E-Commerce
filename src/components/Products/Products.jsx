import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import styles from "./Products.module.css";

export default function Products() {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  const getProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  });
  return (
    <div className="d-flex justify-content-center flex-row flex-wrap">
      <h2 className="mt-5 text-bold h2">All Products</h2>
      <h4 className="mb-4 h4">Search Products By Name:</h4>
      <input
        type="search"
        className="form-control"
        name="pname"
        value={search}
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
              <Link
                className="col-lg-4 d-flex flex-wrap justify-content-evenly text-decoration-none my-5"
                style={{ width: "30%" }}
                to={`product/${product.id}`}
                key={index}
              >
                <div className="card h-60">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top object-fit-contain w-50 h-50 ratio ratio-1x1 align-self-center"
                  />
                  <div className="card-body h-50">
                    <h3 className="card-title text-success ms-3">
                      {product.title}
                    </h3>
                    <p className="card-text text-center text-danger">
                      {product.price}$
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
