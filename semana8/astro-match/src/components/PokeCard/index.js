import React, { useState, useEffect } from "react"
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
`
const Img = styled.img`
  max-width:50%;
  max-height:400px;`

const Perfil = () => {
 
  const [profile, setProfile] = useState({})

  useEffect(() => {
    pergarPerfil()  
  },[])
  
  const pergarPerfil = () => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isaac/person')
    .then(response => {
      console.log(response.data.profile)
      setProfile(response.data.profile)
    }).catch(err =>{
      console.log(err)
    })
  }
  const escolherPerfil = (opcao) => {
    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isaac/choose-person', {
        "id":profile.id,
        "choice": opcao
      })
    .then(response => {
      console.log(response.data)
      pergarPerfil()
    }).catch(err =>{
      console.log(err)
    })

  }    

  return(
    <div className="App">
      <div>
        <p>Idade: {profile.age}</p>
        <p>Nome: {profile.name}</p>
        <Img src={profile.photo}></Img>
        <p>Bio: {profile.bio}</p>
        <Button onClick={()=>escolherPerfil (false)} >Descartar</Button>
        <button onClick={()=>escolherPerfil (true)}>Curtir</button>
       
      </div>
      <div><button>Limpar swipes e matches</button></div>

    </div>
  )
 
}

export default Perfil