import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }

   const criarVigem = useHistory();

   const goToCreateTripPage = () => {
     criarVigem.push("/trips/create")
   }
  return (
    <div>
        <h1>Página de login do ADM</h1>
        <button onClick={goToHomePage}>Voltar pra Home</button>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>
        
    </div>
  )
}
export default LoginPage;