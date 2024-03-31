import React from 'react'
import styles from './HomeHeader.module.css'
import phone from '../../../assets/icons/phoneIcon.png'
import { Link } from 'react-router-dom'
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
        {localStorage.getItem("token")?"":<div className={styles.links}>
        <Link  className={styles.textFont} to={'/login'}> Login  </Link>
        <p className={styles.textFont}>&nbsp;|&nbsp; </p>
        <Link  className={styles.textFont} to={'/register'}> Sign In </Link>
        </div> }
      
      </div>

    </div>
  )
}

export default HomeHeader