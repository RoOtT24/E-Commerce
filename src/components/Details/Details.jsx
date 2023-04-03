import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Details() {
  let params = useParams();
  let [product, setProduct] = useState({});
  
  let getProduct = async ()=> {
    let {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setProduct(data)
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className='d-flex justify-content-center align-items-center flex-column my-5'>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt="" className='h-25 w-25 mt-4'/>
      <span className='text-light bg-dark my-4'>{product.price}</span>
</div>
  )
}
