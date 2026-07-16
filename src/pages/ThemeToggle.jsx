
import React, { useState } from "react";

export default function ThemeToggle() {

  const [darkTheme,setDarkTheme] = useState(false);

  const pageStyle = {
    backgroundColor :darkTheme? "black":"white",
    color           :darkTheme? "white":"black",
    height          : "100vh",
    alignItems      : "center",
    justifyContent  : "center",
    display         : "flex",
    flexDirection   : "column"
  }

  const darkThemeButton = {
    backgroundColor : darkTheme? "yellow":"white",
    border          : darkTheme? "4px solid yellow":"4px solid white",
    font            : "20px bold",
    color           : darkTheme? "Black" :"black",
    height          : "40px",
    width           : "320px",
    borderRadius    : "4px",
    alignItems      : "center",
    justifyContent  : "center",
    display         : "flex",
    flexDirection   : "column",
    marginTop       : "10px",
    boxShadow       : "2px 2px 2px 2px"
  }

   const lightThemeButton = {
    backgroundColor : !darkTheme? "yellow":"white",
    border          : !darkTheme? "4px solid yellow":"4px solid white",
    font            : "20px bold",
    color           : "black",
    height          : "40px",
    width           : "320px",
    borderRadius    : "4px",
    alignItems      : "center",
    justifyContent  : "center",
    display         : "flex",
    flexDirection   : "column",
    marginTop       : "10px",
    boxShadow       : "2px 2px 2px 2px"

  }



  return(
    <div style={pageStyle}>

      <h2> Dark Theme Toggle </h2>

      <button onClick={() => setDarkTheme(true)} style={darkThemeButton}> Dark Theme </button>

      <button onClick={() => setDarkTheme(false)} style={lightThemeButton} > Light Theme</button>
    </div>
  )
}