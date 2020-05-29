import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SectionDetailsTrips from './components/SectionDetailsTrips';


const TripsDetailsPage = () => {
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
  return (
    <div>
        <SectionDetailsTrips/>             
        <button onClick={goToHomePage}>Voltar pra Home</button>        
    </div>
  )
}
export default TripsDetailsPage;