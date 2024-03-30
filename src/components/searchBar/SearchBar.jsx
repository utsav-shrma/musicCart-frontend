import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/icons/searchIcon.png'
function SearchBar({handleChange,value,submitSearch}) {
  const [isDesktop, setIsDesktop] = useState(true);
    
    
  const handleResize=()=>{
    
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth>breakpoint));
    const breakpoint = 750;
    const width=window.innerWidth;
    if(width>breakpoint){
      setIsDesktop(true);
    }
    else{
      setIsDesktop(false);
    }
   

  }
  
    useEffect(() => {
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      
    }, []);
        

  return (
    <div className={styles.container} style={{marginTop:isDesktop?"20px":""}}>
            <div className={styles.searchContainer}>
                <button  className={styles.searchButton}>
                    <img className={styles.searchIcon} src={searchIcon}></img>
                </button>
                <input onKeyPress={(e) => e.key === 'Enter' && submitSearch()} name="search" value={value} onChange={handleChange} type='text' className={styles.searchInput} placeholder={isDesktop?'Search by Product Name':"Search Musicart"}></input>
            </div>
    </div>
  )
}

export default SearchBar