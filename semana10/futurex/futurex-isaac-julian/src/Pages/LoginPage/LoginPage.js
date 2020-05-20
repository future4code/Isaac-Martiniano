import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }

   const logar = useHistory();

   const goToAdmHomePage = () => {
     logar.push("/login/adm-home")
   }
  return (
    <div>
        <h1>Página de login do ADM</h1>
        <h3>Entrar</h3>            
                <label>
                  Usuário:
                  <input 
                      type="text"                        
                  />    
                </label>            
                <label>
                  Senha:
                  <input
                      type="password"                                              
                  />
                </label>            
                <label>
                  <button onClick={goToAdmHomePage}>Logar</button>
                  <a><p>Cadastro</p></a>             
                </label>      
        <button onClick={goToHomePage}>Voltar pra Home</button>
        
    </div>
  )
}
export default LoginPage;