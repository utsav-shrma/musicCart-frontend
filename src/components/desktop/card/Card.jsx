import React from 'react'
import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.container}  >
        <div className={styles.imageContainer}>

        </div>
        <p className={styles.productInfo}>product title</p>
        <p className={styles.productInfo}>price</p>
        <p className={styles.productInfo}>product categoty</p>
        </div>
  )
}

export default Card 