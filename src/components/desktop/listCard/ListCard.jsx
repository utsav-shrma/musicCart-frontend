import React from 'react'
import styles from './ListCard.module.css'
function ListCard() {
  return (
    <div className={styles.container}  >
    <div className={styles.imageContainer}>

    </div>
    <div className={styles.infoContainer}>
    <p className={styles.productTitle}>boAt Rockerz 551ANC</p>
    <p className={styles.productPrice}>Price - ₹ 3,000</p>
    <p className={styles.productCategory}>Blue | On-ear headphone</p>
    <p className={styles.productDesc}>boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
Bluetooth Headset (Stellar Black, On the Ear)</p>

    <button className={styles.detailsButton}>
        Details
    </button>
    </div>
    
    </div>
  )
}

export default ListCard