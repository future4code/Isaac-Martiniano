import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.div`
  text-align: center;
  width: 300px;
  margin:auto;
  margin-top: 70px;
  border: 3px solid royalblue;
  padding-bottom: 20px;
  background-color: sandybrown;
`
const NomeEBt = styled.div`
    align-items: center;
`
export class ListaDeUsuarios extends React.Component{
    state = {
        usersList:[]
    }

    componentDidMount(){
        this.getUsersList()
    }

    getUsersList = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
            headers: {
                Authorization: 'isaac-martiniano-julian'
            }
        }).then((response) => {
            console.log(response.data)
            this.setState({usersList: response.data})
        }).catch((error) => {
            console.log(error.response)
        })
    }

    onClickDeleteUser = (userId) => {       
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,{
            headers: {
                Authorization: 'isaac-martiniano-julian'
            }    
        }).then((response) => {
            window.alert('Usuário Deletado com Sucesso')
            this.getUsersList()
        }).catch((error) => {
            window.alert('Deu Error :(')
        })
    } 
    render(){
        return(
            <>
                <List>
                    <h1>Lista de Usuarios</h1>
                    <div>{this.state.usersList.map(user =>{
                        return (
                            <NomeEBt>
                                <p>{user.name}<button onClick={() => this.onClickDeleteUser(user.id)}>Apagar</button></p>
                                
                            </NomeEBt>    
                        )
                    })
                    }
                    </div>
                </List>
            </>
        )
    }
}
  