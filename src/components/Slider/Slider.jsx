import React, { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
// my styles
import styles from "./Slider.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//
//
//

const Slider = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products?limit=6"
    );
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const options = {
    type: "loop",
    autoplay:true,
    pauseOnHover : false,
   
  };
  return (
   <>
{products.length?<Splide options={options} hasTrack={ false }>
  <SplideTrack>
    {products.map( (product, index)=>
  <SplideSlide
            key={index}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <div className="card py-3"  style={{backgroundColor:'powderblue'}}>
    <img src={product.image} alt={product.title} className={styles.img} onClick={()=>{
            navigate('/products')}}/></div>
            <h4 className="text-center mt-5">{product.title}</h4>
  </SplideSlide>
 )}
  </SplideTrack>
  
</Splide>:''}
</>
  );
    }


export default Slider;
