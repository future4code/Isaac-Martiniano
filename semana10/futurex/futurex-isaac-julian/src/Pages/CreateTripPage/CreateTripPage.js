import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateTripPage = () => {
   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }
  return (
    <div>
        <h1>Criar Viagens:</h1>
        <button onClick={goToHomePage}>Voltar pra Home</button>
        
    </div>
  )
}
export default CreateTripPage;