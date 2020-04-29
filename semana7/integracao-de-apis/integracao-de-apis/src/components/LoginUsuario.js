import React from 'react';

import { LinhaCopyrigth } from './DireitosReservados';
import axios from 'axios';

export class LoginUsuario extends React.Component{
    state = {
        valorCurtir: '',
        nameValue: '',
        emailValue:'',
        

    }
          
    onClickCurtir = () => {        
        const curtiu = 'Obrigado'
        this.setState({valorCurtir: curtiu})            
    }
    onClickDescurtir = () => {        
        const curtiu = ''
        this.setState({valorCurtir: curtiu})            
    }
    onChangeNome = event => {
        this.setState({nameValue: event.target.value})
    }
    onChangeEmail = event => {
        this.setState({emailValue: event.target.value})
    }   

    onClickBotaoCadastrar = () =>{
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }
        console.log("clicou em cadastrar")

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'isaac-martiniano-julian'
            }    
        }
        )
        .then(response => {
            window.alert('Usuário Criado com Sucesso!')
        })
        .catch(error => {
            console.log(error.response)
            window.alert('ERRO ao Criar o Usuario :(')
        })

        this.setState({nameValue: '', emailValue: ''})
    }  

    render(){
        console.log(this.state.valorContador)
        return (
            <>               
                <div className={'caixa-de-login'}>
                    <h2>Novo Cadastro</h2>
                    <p>Nome:</p>
                    <input placeholder={'Nome'} value={this.state.nameValue} onChange={this.onChangeNome}></input>
                    <p>Email:</p>
                    <input placeholder={'Email'} value={this.state.emailValue} onChange={this.onChangeEmail}></input>
                    <p onClick={this.onClickBotaoCadastrar}><a className="bt-cadastrar" href="#">Cadastrar</a></p>                    
                </div>
                <div className={'area-curtir'}>
                    <p>{this.state.valorCurtir}</p>
                    <button onClick={this.onClickCurtir}>Curtir</button>
                    <button onClick={this.onClickDescurtir}>Descurtir</button>
                </div>               
                <LinhaCopyrigth textoDoRodape={'TODOS OS DIREITOS RESERVADOS'}/>               
            </>
        )    
    }
}

//elemento filho