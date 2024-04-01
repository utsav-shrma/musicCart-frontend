import React from 'react'
import styles from './HomeHeader.module.css'
import phone from '../../../assets/icons/phoneIcon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function HomeHeader() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  }
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
        {localStorage.getItem("token")? <button onClick={handleLogout} className={styles.logoutButton} > Logout  </button>:<div className={styles.links}>
        <Link  className={styles.textFont} to={'/login'}> Login  </Link>
        <p className={styles.textFont}>&nbsp;|&nbsp; </p>
        <Link  className={styles.textFont} to={'/register'}> Sign In </Link>
        </div> }
      
      </div>

    </div>
  )
}

export default HomeHeader