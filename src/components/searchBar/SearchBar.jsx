import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/icons/searchIcon.png'
import { useNavigate } from 'react-router-dom';
function SearchBar({setSearch}) {
  const [isDesktop, setIsDesktop] = useState(true);
  const navigate=useNavigate();
    const [text,setText]=useState('');
    const handleSearchChange = (event) => {
      setText(event.target.value);
    };
    const submitSearch = () => {
      if(setSearch){
        setSearch(text);
      }
      else{
        navigate('/', { state: { search:text} });
      }
      
    };
    

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
                <input onKeyPress={(e) => e.key === 'Enter' && submitSearch(text)} name="search" value={text} onChange={handleSearchChange} type='text' className={styles.searchInput} placeholder={isDesktop?'Search by Product Name':"Search Musicart"}></input>
            </div>
    </div>
  )
}

export default SearchBar