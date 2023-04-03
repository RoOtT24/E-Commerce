import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cats from '../Cats/Cats';

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
            catProduct.map( (product,index)=> {return <Link className="col-lg-4 d-flex flex-wrap justify-content-evenly text-decoration-none my-5" style={{width: '30%'}} to={`product/${product.id}`} key={index}>
              <div className='card h-60'>  
              <img src={product.image} alt={product.title} className='card-img-top object-fit-contain w-50 h-40 ratio ratio-21x9 align-self-center' />
              <div className='card-body h-60'>
                <h3 className='card-title text-success ms-3'>{product.title}</h3>
                <p className='card-text text-center text-danger'>{product.price}$</p>
                </div>
                </div>
                </Link>
                
                }
                
            )
        }
    </div>
</div>
  )
}
