import React from "react"
import styled from 'styled-components'

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  padding: 0 8px;
`
const Button = styled.button`  
  background: transparent;
  border-radius: 3px;
  border: 2px solid  #f7d89f;
  color: #f7d89f;
  margin: 122px 130px;
  padding: 1rem 1rem;  
  :hover {
    color: #00FF00;
    border: 4px solid #00FF00;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
        transform: scale(1.3);
  }
`

function BotaoLogin(props) { 
  return(
    <AppBarContainer>
        <Button onClick={props.goToAreaLogin}>ACESSO RESTRITO</Button>     
    </AppBarContainer>
  ) 
}

export default BotaoLogin