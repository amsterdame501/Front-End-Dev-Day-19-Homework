import React from 'react'
import  { useState } from 'react'

const Theme = () =>{
const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <h1>{isDarkMode ? '🌙Dark Mode' : '☀️Light Mode'}</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? '☀️เปลี่ยนเป็น Light Mode' : '🌙เปลี่ยนเป็น Dark Mode'}
      </button>
    </div>
  );

}

export default Theme
