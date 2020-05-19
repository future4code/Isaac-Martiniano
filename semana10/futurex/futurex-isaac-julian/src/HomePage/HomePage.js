import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const login = useHistory();

  const goToLoginPage = () => {
    login.push('/login')
  }

  const formPage = useHistory();

  const goToFormPage = () => {
    formPage.push('/application-form')
  }
   
  return (
    <div>
        <h1>Página Home</h1>
        <button onClick={goToLoginPage}>Login</button>
        <button onClick={goToFormPage}>Formulário de aplicação</button>
    </div>
  )
}
export default HomePage;
