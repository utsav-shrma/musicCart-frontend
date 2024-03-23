import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/icons/searchIcon.png'
function SearchBar({handleChange,value,submitSearch}) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 750;
  
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  
    }, []);
        

  return (
    <div className={styles.container}>
            <div className={styles.searchContainer}>
                <button  onClick={submitSearch} className={styles.searchButton}>
                    <img className={styles.searchIcon} src={searchIcon}></img>
                </button>
                <input name="search" value={value} onChange={handleChange} type='text' className={styles.searchInput} placeholder={width>=breakpoint?'Search by Product Name':"Search Musicart"}></input>
            </div>
    </div>
  )
}

export default SearchBar