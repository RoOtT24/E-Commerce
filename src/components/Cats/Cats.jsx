import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Cats.module.css'

export default function Cats() {
  let [cats,setCats] = useState([]);

  const getCats = async ()=> {
      let {data} = await axios.get('https://fakestoreapi.com/products/categories');
      setCats(data);
  }
  useEffect(() => {
    getCats();
   
  }, []);
  return (
  <div className={styles.cat}>
    <div className='container'>

    <div className={styles.cats}>
    {
      cats.map((cat,index)=>
      <Link to={`/category/${cat}`} id={styles.catLink} className={`${styles.catLink} `} key={index}>{cat}</Link>)
    }
    </div>
    </div>
    </div>
  )
}
