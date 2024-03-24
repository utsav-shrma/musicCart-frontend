import React from 'react'
import styles from './BackButton.module.css'

function BackButton() {
  return (
    <div className={styles.backButtonContainer}>
          <button onClick={()=>{navigate('/')}}className={styles.backButton}>Back to Products</button>
        </div>
  )
}

export default BackButton