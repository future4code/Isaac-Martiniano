import React from 'react';
import { useHistory } from 'react-router-dom';

const TripsDetailsPage = () => {
   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }
  return (
    <div>
        <h1>Relação de viagens:</h1>

        <h6>Marte</h6>
        <h6>Mercúrio</h6>
        <h6>Vênus</h6>
        <h6>Júpiter</h6>
        <h6>Saturno</h6>
        <h6>Urano</h6>
        <h6>Netuno</h6>
        <h6>Upsilon Andromedae b.</h6>
        <h6>Makemake</h6>

        <button onClick={goToHomePage}>Voltar pra Home</button>
        
    </div>
  )
}
export default TripsDetailsPage;