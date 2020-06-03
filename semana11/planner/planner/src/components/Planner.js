import React from 'react';
import styled from 'styled-components'

const Container = styled.div` 
background-color: #360e00;
min-height: 80vh;
color: white;
text-align: center;
padding-top: 3vh;
margin-left: 2vw;
margin-right: 2vw;
`
const Form = styled.form`
margin: 2vh;    
`
const Select = styled.select`
margin: 0 1%;
padding: 1vw;
`
const Input = styled.input`
margin: 0 1%;
padding: 1vw;
`

const Button = styled.button`
margin-left: 1%;
padding: 1vw;
`

const Dia = styled.div`
background-color: #903c17;
min-height: 50vh;
padding: 1vw;
`
const DiaContainer = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
text-align:center;
margin-left: 2vw;
margin-right: 2vw;
column-gap: 1vh;
`

function Planner() {
    return (
      <Container>
        <h2>Criar tarefas</h2>
        <div>
          <Form>
          <Input             
            name="tarefa" 
            type="text"
            pattern="[A-Za-z0-9,!.? ]{2,}"
            title="O nome deve conter 2 letras no mínimo" 
            placeholder="Digite aqui sua tarefa"
            required 
          />     
          <Select        
            name="dias"
            type="text"         
            required          
          >
            <option>Escolha um dia</option>
            <option>Domingo</option>
            <option>Segunda</option>
            <option>Terça</option>
            <option>Quarta</option>
            <option>Quinta</option>
            <option>Sexta</option>
            <option>Sábado</option>            
          </Select>
          <Button>Enviar</Button>
          <Button>Limpar campos</Button>
          </Form>          
        </div>
        <DiaContainer>
          <Dia>Domingo</Dia>
          <Dia>Segunda</Dia>
          <Dia>Terça</Dia>
          <Dia>Quarta</Dia>
          <Dia>Quinta</Dia>
          <Dia>Sexta</Dia>
          <Dia>Sábado</Dia>
        </DiaContainer>  
      </Container>
    );
  }
  
  export default Planner;