import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Slider = () => {
  const navigate = useNavigate()
  const [slideNum,setSlideNum] = useState(1)
  const [products,setProducts] = useState([])
  const [active,setActive] = useState([false,false,false,false,false])

  // Thumbnail image controls
  const currentSlide = (n)=> {
    setSlideNum(n+1);
  }

  // Next/previous controls
  const plusSlides = (n)=> {
    setSlideNum(slideNum+n);
  }

  const autoSlider = async()=> {
    // while(true)
    plusSlides(1);
  }

  const showSlides = (n)=>{
    const slides = document.getElementsByName("mySlides");
    if(n > slides.length){
      setSlideNum(1);
      n=1;
    }
    else if(n < 1){
      setSlideNum(slides.length)
      n = slides.length;
    }
    for (let i = 0; i < active.length; i++) {
      active[i] = false;
    }
     active[n-1] = true ;
     
  }

const getProducts = async ()=>{
  const {data} = await axios.get('https://fakestoreapi.com/products?limit=5')
  setProducts(data)
}
setInterval(()=>{autoSlider()},3000) ;

  useEffect(() => {
   getProducts();
  }, []);
  useEffect(()=>{
    showSlides(slideNum);

  } ,[slideNum])
  return (
    <>
    <Link className={styles.prev} onClick={()=>{plusSlides(-1)}}>
        ❮
      </Link>
      <div className={styles.slider}>
        {products?.map( (product, index)=> {
          return <div key={index} className={styles.slideshowContainer}>
          {/* Full-width images with number and caption text */}
          <div className={`${styles.mySlides} ${styles.fade}`} name={"mySlides"} style={{display:active[index]?'block':'none'}}>
            <div className={styles.numberText}>{index+1} / 5</div>
            <div className="d-flex flex-column align-items-center">
            <img src={product.image} style={{ height:'60vh', objectFit:'contain', cursor:'pointer'}} onClick={()=>{
            navigate('/products')}}/>
            <div className={styles.text}>{product.title}</div>
            </div>
          </div>
          
        </div>
        } )}
      </div>
      {/* Next and previous buttons */}
      
      <Link className={styles.next} onClick={()=>{plusSlides(1)}}>
        ❯
      </Link>

      <br />
      {/* The dots/circles */}
      <div style={{ textAlign: "center" }}>
        {products.map( (product,index)=>
         <span key={index} className={active[index]?`${styles.dot} ${styles.active}`:`${styles.dot}`} onClick={()=>{currentSlide(index)}} name='dot'/> )}
      </div>
    </>
  );
};

export default Slider;
