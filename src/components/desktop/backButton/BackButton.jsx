import React from 'react'
import styles from './BackButton.module.css'
import { useNavigate } from 'react-router-dom';
function BackButton() {
  const navigate=useNavigate();
  return (
    <div className={styles.backButtonContainer}>
          <button onClick={()=>{navigate('/');} }className={styles.backButton}>Back to Products</button>
        </div>
  )
}

export default BackButton