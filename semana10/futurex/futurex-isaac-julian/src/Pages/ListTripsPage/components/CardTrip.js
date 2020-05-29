import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const CardUnd = styled.div`
    
    color: black;
    border: 2px solid #f7d89f;
    margin-left: 12px;
        p{
            padding: 0 15px;
        };
        :hover {
    color: black;
    border: 4px solid #00FF00;
    font-size: 1rem;    
  }    
`

const CardTrip = (props) => {
        
    const trip = props.trips
    
    const formTrip = useHistory();  

    const goToFormPage = () => {
        const id = trip.id  
        console.log(id)
        formTrip.push("/application-form/"+id)        
    }
        
    return(
        <div>            
            <CardUnd>
                <a onClick={goToFormPage}>
                    <img src={'https://picsum.photos/300/300'}/>        
                    <p>Nome: {trip.name}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duração em dias: {trip.durationInDays}</p>
                    <p>Data: {trip.date}</p>
                </a>
            </CardUnd>                        
        </div>
    )
}

export default CardTrip