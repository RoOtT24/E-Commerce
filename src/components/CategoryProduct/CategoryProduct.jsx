import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cats from '../Cats/Cats';
import Card from '../Common/Card/Card';

export default function CategoryProduct() {
    let [catProduct, setCatProduct] = useState([]);
    let {name} = useParams();
    let getProducts = async ()=> {
        
      //  console.log(params);
        let {data} = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
        setCatProduct(data)
       }
        useEffect(() => {
            getProducts();    
        }, );
        useEffect(() => {
            getProducts();    
        }, [name]);
  return (
    <div>
        <Cats/>
    <h2 className='mt-5 text-capitalize'>{name} Products</h2>
    <div className="d-flex flex-wrap justify-content-evenly">
        {
            catProduct?.map( (product,index)=> 
            <Card key={index} product={product}/>       
            )
        }
    </div>
</div>
  )
}
