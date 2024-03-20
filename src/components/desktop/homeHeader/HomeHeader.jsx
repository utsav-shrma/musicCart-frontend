import React from 'react'
import styles from './HomeHeader.module.css'
import phone from '../../../assets/icons/phoneIcon.png'
function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className={styles.phoneLogo}src={phone}></img>
        <p className={styles.textFont} > &nbsp;912121131313</p>
      </div>

      <div className={styles.innerContainer}>
        <p className={styles.textFont} >Get 50% off on selected items | Shop Now</p>
      </div>

      <div className={styles.innerContainer}>
      <p className={styles.textFont}>Login | Sign Up</p>
      </div>

    </div>
  )
}

export default HomeHeader