import React, { useState } from "react"
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AppBarContainer = styled.div`
  display: block;
  justify-content: space-between;  
  align-items: center;
  padding: 0 1rem;  
  min-width: 60%;
  
`

const Button = styled.button`  
  background: transparent;
  border-radius: 3px;
  border: 2px solid #f7d89f;
  color: #f7d89f;  
  padding: 1rem 1rem;
  margin: auto 1rem;  
  :hover {
    color: #00FF00;
    border: 4px solid #00FF00;    
  }
`

const Input = styled.input`
  display:flex;
  font-size: 1rem;
  font-size: 1rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #f7d89f;
  color: #f7d89f;  
  padding: 1rem 1rem;
  margin: 1rem auto; 
  :hover {
    color: #00FF00;
    border: 4px solid #00FF00;
  }   
`

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/isaac-julian'

const AreaDeLogin =(props) => { 
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const logar = useHistory();

   const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    }
    try {
     const response = await axios.post(`${baseUrl}/login`,body);

     localStorage.setItem('token',response.data.token)
     
     console.log(response.data.token);
     logar.push("/login/adm-home")
    } catch(e) {
      alert('Usuario não encontrado :(')
    };
  }

    const handleLogout = () => {
      localStorage.clear();
    }
       
  return(
    <AppBarContainer>
      <div>
        <Input
          value={email}
          placeholder='e-mail'
          onChange={e => setEmail(e.target.value)}
          type='email'
        />
        <Input
          value={password}
          placeholder='senha'
          onChange={e => setPassword(e.target.value)}
          type='password'
        />
      </div>
      <Button onClick={ handleLogin }>logar</Button>
      <Button onClick={ handleLogout }>logout</Button>
    </AppBarContainer>
  ) 
}

export default AreaDeLogin


