import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

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
width: 20vw;
margin: 0 1%;
padding: 1vw;
`
const Input = styled.input`
width: 25vw;
margin: 0 1%;
padding: 1vw;
`
const Button = styled.button`
width: 15vw;
margin-left: 1%;
padding: 1vw;
font-size: 1rem;
`
const Dia = styled.div`
background-color: #903c17;
min-height: 50vh;
`

const DiaContainer = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);  
text-align:center;
margin-left: 0.5vw;
margin-right: 0.5vw;
column-gap: 1vh;
`
const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};   

const Planner = () => { 
  const {form, onChange} = useForm ({ text: '', day: ''})
  const [tarefa, setTarefa] = useState([])  
   
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();    
  }

  const executeRequest =  async () => {
    const body = {
      "text": form.text,
      "day": form.day,      
    }
    const response = await axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-isaac`,body)
      console.log('post',response)    
  }

  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-isaac').then(response => {      
      setTarefa(response.data)      
    })
  }, []);
 
    return (
      <Container>        
        <h2>Criar tarefas</h2>
        <div>
          <Form onSubmit={handleSubmit} >
            <Input
              value={form.text}             
              name="text"            
              type="text"           
              pattern="[A-Za-z0-9,!.? ]{2,}"
              title="O nome deve conter 2 letras no mínimo"
              onChange={handleInputChange} 
              placeholder="Digite aqui sua tarefa"
              required 
            />                
            <Select
              value={form.day} 
              onChange={handleInputChange}       
              name="day"            
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
            <Button onClick={executeRequest}>Enviar</Button>          
          </Form>          
        </div>
        <DiaContainer>
          <Dia>                
            <h4>Domingo</h4>
            {tarefa.filter(person => person.day === "Domingo").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))}          
          </Dia>
          <Dia>
            <h4>Segunda</h4>
            {tarefa.filter(person => person.day === "Segunda").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))} 
          </Dia>
          <Dia>
            <h4>Terça</h4>
            {tarefa.filter(person => person.day === "Terça").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))} 
          </Dia>
          <Dia>
            <h4>Quarta</h4>
            {tarefa.filter(person => person.day === "Quarta").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))} 
          </Dia>
          <Dia>
            <h4>Quinta</h4>
            {tarefa.filter(person => person.day === "Quinta").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))} 
          </Dia>
          <Dia>
            <h4>Sexta</h4>
            {tarefa.filter(person => person.day === "Sexta").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))} 
          </Dia>
          <Dia>
            <h4>Sábado</h4>
            {tarefa.filter(person => person.day === "Sábado").map(filteredPerson => (
            <p>
              {filteredPerson.text}
            </p>
            ))} 
          </Dia>
        </DiaContainer>  
      </Container>
    );
  }
  
  export default Planner;