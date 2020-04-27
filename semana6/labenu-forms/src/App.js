import React from 'react';
import './App.css';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

class App extends React.Component {
  state = {
    etapa: 1,
  }; 
    
  renderizaEtapa = () => {    
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
                
    }
  }
  
  irParaProximaEtapa = () => {
    const formAtual = this.state.etapa;
    const proximoForm = formAtual + 1

    this.setState({etapa: proximoForm})   
  }
 
  render() {

    return (
      <div className={"App"}>
        <h1>LabenuForms</h1>
        {this.renderizaEtapa()}
       
        <button onClick = {this.irParaProximaEtapa}>Próxima Etapa</button>
        
    </div>
    )
  }
}

export default App;
