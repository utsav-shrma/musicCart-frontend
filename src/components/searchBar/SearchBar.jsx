import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/icons/searchIcon.png'
function SearchBar() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 750;
  
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  
    }, []);
        

  return (
    <div className={styles.container}>
            <div className={styles.searchContainer}>
                <button className={styles.searchButton}>
                    <img className={styles.searchIcon} src={searchIcon}></img>
                </button>
                <input type='text' className={styles.searchInput} placeholder={width>=breakpoint?'Search by Product Name':"Search Musicart"}></input>
            </div>
    </div>
  )
}

export default SearchBar