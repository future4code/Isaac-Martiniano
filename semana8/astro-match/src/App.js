import React, { useState, useEffect } from "react"
import "./styles.css"
import Lista from "./components/Lista"
import Perfil from "./components/Perfil"


const App = () => {
 
  return(
    <div className="App">
      <Perfil/>
      <Lista/>

    </div>
  )
 
}

export default App



