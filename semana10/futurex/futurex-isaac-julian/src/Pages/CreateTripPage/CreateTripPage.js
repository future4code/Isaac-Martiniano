import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
    
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return { form, onChange};
}

const CreateTripPage = () => {
  const {form, onChange, resetForm} = useForm ({
    name: '',
    planet: '',
    date: '', 
    description: '', 
    durationInDays:''
  })

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    console.log(form);
  }

   const homePage = useHistory();

   const goToHomePage = () => {
       homePage.push("/")
   }
   
   useEffect(() => {
    const token = localStorage.getItem('token');

    if(token === null){
      homePage.push("/")
    }
  },[homePage])

  return (
    <div>
        <h1>Criar Viagens:</h1>
        <form onSubmit={handleSubmit}>
          <input 
            value={form.name} 
            onChange={handleInputChange} 
            name="name" 
            type="text"
            pattern="[A-Za-z ]{5,}"
            title="O nome deve conter 5 letras no mínimo" 
            placeholder="Nome"
            required 
          />          
          <select
          value={form.planet} 
          onChange={handleInputChange} 
          name="planet"
          type="text"           
          placeholder="Planeta"
          required          
          >
            <option>Planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>            
          </select>
          <input 
            value={form.date} 
            onChange={handleInputChange} 
            name="date" 
            type="date"              
            placeholder="Data"
            required 
          />
          <input 
            value={form.description} 
            onChange={handleInputChange} 
            name="description" 
            type="text"
            pattern="[A-Za-z ]{30,}"
            title="Sua Resposta deve conter 30 caracteres no mínimo" 
            placeholder="Descrição"
            required 
          />
          <input 
            value={form.durationInDays} 
            onChange={handleInputChange} 
            name="durationInDays" 
            type="number"
            min="50" 
            placeholder="Duração em dias!"
            required 
          />
          <button>Enviar</button>
          <button onClick={resetForm}>Limpar campos</button>
        </form>
        <button onClick={goToHomePage}>Voltar pra Home</button>
        
    </div>
  )
}
export default CreateTripPage;