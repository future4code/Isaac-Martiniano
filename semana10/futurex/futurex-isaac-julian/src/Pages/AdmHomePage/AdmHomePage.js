import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import fundoHome from './imagens/fundoHome.jpg'

const AdmHomeContainer = styled.div` 
background-image: url(${fundoHome});
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
   `

const Header = styled.div` 
  background-color:#002144;
  width: 30%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;  
  padding-top: 1px;
  color: white;
  font-size: 0.65rem;
  position: relative; 
  `

const ButtonViagem = styled.button`
background-color:#25f318;
height: 15rem;
border-radius:60%;  
text-align: center;
margin-left: 43%;
margin-top: 22.3%;  
padding-top: 1%;
display: grid;
color: #fe3701;
border: 4px solid #fe3701;
font-size: 2.26em;
position: absolute;

:hover {
    background-color: yellow;
    color: #fe3701;
    border: 4px solid #fe3701;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
        transform: scale(1.3);
  } 
`

const ButtonHome = styled.button`
background-color:yellow;
height: 9%;
margin-top: 31%;
margin-left: 72.80%;
display: grid;
color: red;
border: 4px solid #25f318;
font-size: 1em;
position: absolute;

:hover {
  background-color:#f33c0a;
    color: yellow;
    border: 4px solid yellow;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
        transform: scale(1.3);
  } 
`
const ButtonTripsDetails = styled.button`
background-color:yellow;
height: 9%;
width: 16%;
margin-top: 41%;
margin-left: 5%;
display: grid;
color: red;
border: 4px solid #25f318;
font-size: 1em;
position: absolute;

:hover {
  background-color:#f33c0a;
    color: yellow;
    border: 4px solid yellow;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
        transform: scale(1.3);
  } 
`

const Footer = styled.div`
width: 50%;
height: 40px;
font-size:1em;
display: block;
color: white;
padding-top: 230px;
margin-left: auto;
margin-right: auto;
margin-top:632px;  
`

const AdmHomePage = () => {

  const homePage = useHistory();
  const goToHomePage = () => {
      homePage.push("/")
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token === null){
      homePage.push("/")
    }
  },[homePage])

  const criarVigem = useHistory();
  const goToCreateTripPage = () => {
    criarVigem.push("/trips/create")
  }
  
  const detalheDaViagem = useHistory();
  const goToTripsDetailsPage = () => {
    detalheDaViagem.push("/trips/details")
  }

  return (
    <AdmHomeContainer>
      <Header>
        <h1>PAINEL DO ADMINISTRADOR FutureX</h1>
      </Header>
      <div>
        <ButtonViagem onClick={goToCreateTripPage}>CREATE TRIP</ButtonViagem>
      </div>  
      <div>
        <ButtonHome onClick={goToHomePage}>HOME PAGE</ButtonHome>
      </div>  
      <div>
        <ButtonTripsDetails onClick={goToTripsDetailsPage}>GO TO TRIPS DETAILS</ButtonTripsDetails>
      </div>  
      <Footer>
      © Copyright 2020 - All Rights Reserved - Legal Todos os direitos reservados - iMartiniano 
      </Footer>
        
    </AdmHomeContainer>
  )
}
export default AdmHomePage;