import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import Cats from "../../Cats/Cats";

const Search = ({ header, setResults, inputs }) => {
  const [search, setSearch] = useState("");

  const onChange = () => {
    setResults(
      inputs.filter((product) => {
        if (search === "") {
          return product;
        } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
          return product;
        }
      })
    );
  };

  useEffect(() => {
    onChange();
  }, [search]);

  return (
    <>
    <Cats/>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2 className="mt-4 text-bold h2 text-capitalize">{header}</h2>
      {/* <h4 className="mb-4 h4">Search Products By Name:</h4> */}
      <input
        type="search"
        className={styles.input}
        name="pname"
        value={search}
        placeholder={`Search In ${header} By Name`}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
    </>
  );
};

export default Search;
