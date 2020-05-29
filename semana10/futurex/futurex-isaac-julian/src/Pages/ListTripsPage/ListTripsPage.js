import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AllTrip from './components/AllTrip';
import axios from 'axios';

const ListTripsPageContainer = styled.div`
  background-color: #df4b2d;
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-template-rows: 100px auto 100px;	
  `

const VoltarHome = styled.div`
  text-align:center; 
`

const H1 = styled.h1`
  text-align:center; 
`

const SectionTrips = styled.div`
  text-align:left; 
`

const FormOfTripContainer = styled.div`
  text-align:center;   
`

const ButtonVoltarHome = styled.button`    
  border-radius: 3px;
  border: 2px solid #f7d89f;
  color: black;
  margin-top:18%;  
  padding: 1rem 1rem;  
  :hover {
    color: Yellow;
    border: 4px solid #00FF00;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
        transform: scale(1.3);
  }
`

const ListTripsPage = () => {
  const [trips, setTrips] = useState([])
  
  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/isaac/trips').then(response => {
      console.log(response.data)
      setTrips(response.data.trips)      
    })
  }, []);
   
   const homePage = useHistory();
   const goToHomePage = () => {
       homePage.push("/")
   }   

  return (
    <ListTripsPageContainer>
      <VoltarHome>
        <ButtonVoltarHome onClick={goToHomePage}>Voltar pra Home</ButtonVoltarHome>
      </VoltarHome>
      <H1>Todos os Destinos:</H1>
      <FormOfTripContainer></FormOfTripContainer>
      <p></p>      
      <SectionTrips>
        <AllTrip trips={trips}/>
      </SectionTrips>      
    </ListTripsPageContainer>
  )
}
export default ListTripsPage;
