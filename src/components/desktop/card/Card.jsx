import React from 'react'
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';

function Card({product}) {

    const navigate=useNavigate();

  return (
    <div className={styles.container}  >
        <div className={styles.imageContainer}  onClick={()=>{navigate(`/${product._id}`);}}>
            <img className={styles.productImage} src={product.images[0]}></img>
        </div>
        <p className={styles.productInfo}>{product.name}</p>
        <p className={styles.productInfo}>₹ &nbsp;{product.price}</p>
        <p className={styles.productInfo}>{product.category}</p>
        </div>
  )
}

export default Card 