import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cats from '../Cats/Cats';
import Card from '../Common/Card/Card';
import { result } from 'lodash';
import Search from '../Common/Search/Search';

export default function CategoryProduct() {
    let [catProduct, setCatProduct] = useState([]);
    const [results, setResults]= useState([]);
    let {name} = useParams();
    let getProducts = async ()=> {
        
      //  console.log(params);
        let {data} = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
        setCatProduct(data)
        setResults(data);
       }
        useEffect(() => {
            getProducts();    
        },[] );
        useEffect(() => {
            getProducts();    
        }, [name]);
  return (
    <div>
    <Search setResults={setResults} header={`${name} Products`} inputs={catProduct}/>

    <div className="d-flex flex-wrap justify-content-evenly">
        {
            results.map( (product,index)=> 
            <Card key={index} product={product}/>       
            )
        }
    </div>
</div>
  )
}
