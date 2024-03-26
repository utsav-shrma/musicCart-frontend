import React from 'react'
import styles from './BackArrow.module.css'
import { useNavigate } from 'react-router-dom'
import arrow from '../../../assets/icons/arrow.png'
function BackArrow({link}) {
    const navigate=useNavigate();
  return (
    <div className={styles.arrowBack}>
        <button onClick={()=>{navigate(link)}}>
            <img src={arrow}></img>
        </button>
    </div>
  )
}

export default BackArrow