import React  from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Body = styled.div `
background-color: burlywood;
`

const Atividade = styled.div `
background-color: yellow;
width: 60vw;
margin: auto;
margin-top: 30px;
border: 2px solid seagreen;

text-align: center;
`


export class App extends React.Component {
  state = {
    atividade: {}
  }

  componentDidMount = () => {
    this.geraAtividade()
  }

  geraAtividade = () => {
    axios.get('http://www.boredapi.com/api/activity/').then(response => {
      console.log(response.data)
      this.setState({atividade: response.data})
    }).catch(err => {
      console.log(err)
    })
  } 
  render(){
    return (
      <Body >
        
          <button onClick={this.geraAtividade}>Gerar Atividade</button>
        <Atividade> 
          <p><strong>Atividade: </strong>{this.state.atividade.activity}</p>
          <p><strong>Acessibilidade: </strong>{this.state.atividade.accessibility}</p>
          <p><strong>Tipo: </strong>{this.state.atividade.type}</p>
          <p><strong>Participantes necessário: </strong>{this.state.atividade.participants}</p>
          <p><strong>Preço: </strong>{this.state.atividade.price}</p>
        </Atividade>
      </Body>
    );
  }
}
export default App;
