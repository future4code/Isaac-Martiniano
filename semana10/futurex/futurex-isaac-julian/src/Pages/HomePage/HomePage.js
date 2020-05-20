import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Header = styled.div`
  width: 70%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
`


const ButtonContainer = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
  display: flex;
  padding: 15px;
  text-align: center;
  
`

const Button = styled.button`  
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 50px auto;
  padding: 1em 1em;
  
`

const HomePage = () => {
  const login = useHistory();

  const goToLoginPage = () => {
    login.push('/login')
  }

  

  const todasVigens = useHistory();

  const goToListTripsPage = () => {
    todasVigens.push("/trips/list")
  }
   
  return (
    <div>
      <Header>
        <h1>FutureX</h1>
      </Header>
      <ButtonContainer>        
        <Button onClick={goToLoginPage}>Login</Button>
        <Button onClick={goToListTripsPage}>Ver Todos os Destinos</Button>
      </ButtonContainer>
    </div>
    )
}
export default HomePage;
