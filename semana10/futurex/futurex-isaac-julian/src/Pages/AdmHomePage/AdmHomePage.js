import React from 'react';
import { useHistory } from 'react-router-dom';

const AdmHomePage = () => {
  const homePage = useHistory();

  const goToHomePage = () => {
      homePage.push("/")
  }

  const criarVigem = useHistory();

  const goToCreateTripPage = () => {
    criarVigem.push("/trips/create")
  }
  
  const detalheDaViagem = useHistory();

  const goToTripsDetailsPage = () => {
    detalheDaViagem.push("/trips/details")
  }

  return (
    <div>
        <h1>Página Home do ADM</h1>
        <button onClick={goToHomePage}>Voltar pra Home</button>
        <button onClick={goToCreateTripPage}>Criar Viagem</button>
        <button onClick={goToTripsDetailsPage}>Ir Para Detalhes das Viagens</button>
        
    </div>
  )
}
export default AdmHomePage;