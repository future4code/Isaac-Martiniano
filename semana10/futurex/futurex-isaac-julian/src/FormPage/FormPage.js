import React from 'react';
import { useHistory } from 'react-router-dom';

function FormPage() {
   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }
  return (
    <div>
        <h1>Formulário para Viagem</h1>
        <button onClick={goToHomePage}>Voltar pra Home</button>
        
    </div>
  )
}
export default FormPage;