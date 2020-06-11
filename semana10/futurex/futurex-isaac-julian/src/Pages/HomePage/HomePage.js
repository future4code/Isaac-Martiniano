import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import fundoHome from './imagens/fundoHome.jpg'
import BotaoLogin from './componentsHomePage/BotaoLogin'
import AreaDeLogin from './componentsHomePage/AreaDeLogin'
import { useState } from 'react'

const HomePageContainer = styled.div`
background-image: url(${fundoHome});
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;  
`

const Header = styled.div`  
  text-align: center;
  margin-left: auto;
  margin-right: auto;  
  padding-top: 1%;
  display: block;
  color: white;
  font-size: 3.46em;  
  `
 
const ButtonContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;  
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
  display: flex;
  text-align: center;
  padding: 3%;  
`

const ContainerLogin = styled.div`  
  min-width: 60%;
`

const ContainerDestinos = styled.div`
  padding:3%;
`

const Button = styled.button`  
  background: transparent;
  border-radius: 3px;
  border: 2px solid #f7d89f;
  color: #f7d89f;
  margin: 100px auto;
  
  padding: 1rem 1rem;  
  :hover {
    color: #00FF00;
    border: 4px solid #00FF00;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
        transform: scale(1.3);
  }
`

const Section = styled.div`
  margin-left: auto;
  margin-right: auto; 
  max-width:60%;
  color: white;
  font-size: 2em;
  text-align: center;
`

const Footer = styled.div`
  width: 50%;
  font-size:1em;
  display: block;
  color: white;
  padding-top: 10%;
  padding-bottom: 4.3%;
  margin-left: auto;
  margin-right: auto;  
  
`

const HomePage = () => {

  const [selectedArea, setSelectedAre] = useState(false) 

  const todasVigens = useHistory();

  const goToListTripsPage = () => {
    todasVigens.push("/trips/list")
  }

  const areaDeLogar = () => {
    switch(selectedArea) {
      case false:
        return  <BotaoLogin goToAreaLogin={goToAreaLogin}/>
      case true:
        return <AreaDeLogin goToHomeArea={goToHomeArea}/>        
      default:
        return <BotaoLogin/>    
    }
  }

  const goToAreaLogin = () => {
    setSelectedAre(true)
  }  
 
  const goToHomeArea = () => {
    setSelectedAre(false)
  }
   
  return (
    <HomePageContainer>
      <Header>
        <h1>FutureX</h1>
      </Header>
      <ButtonContainer>
        <ContainerLogin>
        {areaDeLogar()}          
        </ContainerLogin>
        <ContainerDestinos>
          <Button onClick={goToListTripsPage}>Ver Todos os Destinos</Button>
        </ContainerDestinos>
      </ButtonContainer>
      <Section>
        <p>Prepare-se para a melhor viagem da sua vida! As melhores coisas da vida são:
           As pessoas que amamos – os lugares onde estivemos – e as memórias que fizemos.</p>
      </Section>
      <Footer>
      © Copyright 2020 - All Rights Reserved - Legal Todos os direitos reservados - iMartiniano 
      </Footer>
    </HomePageContainer>
    )
}
export default HomePage;
/**/  