import React from "react";
import styles from "./Card.module.css";

const Card = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.top}
          style={{
            background: `url(${product.image}) no-repeat center center`,
          }}
        />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.details}>
              <h6>{product.title}</h6>
              <p>${product.price}</p>
            </div>
            <div className={styles.buy}>
              <i className="fa-solid fa-cart-shopping" id={styles.shopping}></i>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.done}>
              <i className="fa-solid fa-check">done</i>
            </div>
            <div className={styles.details}>
              <h6>{product.title}</h6>
              <p>Added to your cart</p>
            </div>
            <div className={styles.remove}>
              <i className="fa-solid fa-xmark" id={styles.remove}>clear</i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inside}>
        <div className={styles.icon}>
          <i className="fa-solid fa-circle-info" id={styles.info}>info_outline</i>
        </div>
        <div className={styles.contents}>
          <table>
            <tbody>
              <tr>
                <th>Rating</th>
                <th>Quantity</th>
              </tr>
              <tr>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
              </tr>
              <tr>
                <p className="mt-4">{product.description}</p>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
