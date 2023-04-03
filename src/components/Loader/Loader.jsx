import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width:'100%'}}>
    <div className={`${styles.ldsHourglass}`}></div>
    </div>
  )
}

export default Loader