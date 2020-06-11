import React, { useState, useEffect } from "react"
import axios from 'axios'
import styled from 'styled-components'

const Lista = () => {
 
  const [lista, setLista] = useState([])

  useEffect(() => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isaac/matches')
    .then(response => {
      console.log(response.data.matches)
      setLista(response.data.matches)
    }).catch(err =>{
      console.log(err)
    })
  },[setLista])

  return( <div>
      <p>{lista.map(pessoa =>{
          <img src={pessoa.photo}/>
      })}
      </p>

    </div>
  )   
}

export default Lista