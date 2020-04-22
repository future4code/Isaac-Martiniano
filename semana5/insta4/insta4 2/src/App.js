import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    ListaDePost: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=4'
      },
      {
        nomeUsuario:'João',
        fotoUsuario:'https://picsum.photos/50/50?a=1',
        fotoPost:'https://picsum.photos/200/150?a=2' 
      },
      {
        nomeUsuario:'Iury',
        fotoUsuario:'https://picsum.photos/50/50?a=5',
        fotoPost:'https://picsum.photos/200/150?a=6'
      }      
    ],
    novopost: [
      {
        valorInputPessoa: "",
        valorInputTema: "",
        valorInputConteudo: ""        
      }
    ]
  }

  adicionaNovoPost = () => {
    const NovaPostagem = {
      nome: this.state.valorInputPessoa,
      tema: this.state.valorInputTema,
      conteudo: this.state.valorInputConteudo
    } 

    const NovasPostagens = [this.state.novopost, NovaPostagem];

    this.setState({novopost: NovaPostagem})
  }
  onChangeInputNome = event => {
    
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputTema = event => {
    
    this.setState({ valorInputTema: event.target.value });
  };
  onChangeInputConteudo = event => {
    this.setState({ valorInputConteudo: event.target.value });
  };
  render() {
    
      const listaDeComponentes = this.state.ListaDePost.map(post => {
       
        return (
          <Post 
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          
          />
        );
      });
      const novaPostagemNaTela = this.state.novopost.map(novoComentario => {
        return (
          <div>
            valorInputPessoa = {novoComentario.valorInputPessoa},
            valorInputTema = {novoComentario.valorInputTema},
            valorInputConteudo = {novoComentario.valorInputConteudo}       
          </div>
        )
      })
    return (
      <div>
        <div>
        {listaDeComponentes}
        </div>
        <input
            
            value={this.state.valorInputNome}
           
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            
            value={this.state.valorInputTema}
            
            onChange={this.onChangeInputTema}
            placeholder={"Tema"}
          />
          <input
           
            value={this.state.valorInputConteudo}
            
            onChange={this.onChangeInputConteudo}
            placeholder={"Conteudo"}
            />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
      
    );
  }
}

export default App;
