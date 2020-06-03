import React from 'react';

import './App.css';
import { LoginUsuario } from './components/LoginUsuario';
import { ListaDeUsuarios } from './components/ListaDeUsuarios';
class App extends React.Component{
  state = {
    currentPage: "FORM"
  }
  onClickChangePage = () => {
    const nextPage = this.state.currentPage === 'FORM' ? 'LIST' : 'FORM'
    this.setState({ currentPage: nextPage })
  }
  render(){
  
  return (
    <div>
      <button className={'botao-para-lista'} onClick={this.onClickChangePage}>{this.state.currentPage ==='FORM' ? 'Ir Para Lista' : 'Voltar Para Formulário'}</button>
      <div >
        {this.state.currentPage === 'FORM' ? (
        <LoginUsuario /> 
        ) : ( 
        <ListaDeUsuarios />
        )}
        
       
      </div>
    </div>
  );
  }  
}

export default App
//elemento pai