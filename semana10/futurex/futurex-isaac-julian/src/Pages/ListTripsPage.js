import React from 'react';
import { useHistory } from 'react-router-dom';

const ListTripsPage = () => {
   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }
   const formPage = useHistory();

   const goToFormPage = () => {
     formPage.push('/application-form')
   }

  return (
    <div>
        <h1>Todos os Destinos:</h1>
        <button onClick={goToHomePage}>Voltar pra Home</button>
        <button onClick={goToFormPage}>Formulário de Viagem</button>
    </div>
  )
}
export default ListTripsPage;