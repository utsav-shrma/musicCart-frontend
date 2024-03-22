import React from 'react'
import styles from './ListCard.module.css'
function ListCard({product}) {
  return (
    <div className={styles.container}  >
    <div className={styles.imageContainer}>
    <img className={styles.productImage} src={product.images[0]}></img>
    </div>
    <div className={styles.infoContainer}>
    <p className={styles.productTitle}>{product.name}</p>
    <p className={styles.productPrice}>Price - ₹ {product.price}</p>
    <p className={styles.productCategory}>{product.color} | {product.category}</p>
    <p className={styles.productDesc}>{product.summary}</p>

    <button className={styles.detailsButton}>
        Details
    </button>
    </div>
    
    </div>
  )
}

export default ListCard