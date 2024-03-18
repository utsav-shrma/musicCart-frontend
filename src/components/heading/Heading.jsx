import React from 'react'
import styles from './Heading.module.css'
import logo from '../../assets/images/musicArtLogo.png'
function Heading() {
  return (
    <div className={styles.container}>
        <img className={styles.logo} src={logo}></img>
        <p className={styles.heading}>Musicart</p>
    </div>
  )
}

export default Heading