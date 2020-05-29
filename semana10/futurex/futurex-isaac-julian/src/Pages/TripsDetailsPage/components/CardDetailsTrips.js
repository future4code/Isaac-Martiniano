import React from 'react'
import styled from 'styled-components'

const CardUnd = styled.div`
    background-color: rgba(0,0,0,0.90);
    color: Yellow;
    border: 2px solid #f7d89f;
    margin-left: 12px;
        p{
            padding: 0 15px;
        };
        :hover {
    color: yellow;
    border: 4px solid #00FF00;
    font-size: 1rem;    
  }    
`

const CardDetailsTrips = (props) => {
    const trip = props.trip
    console.log('trip',trip)    
    
    return( trip && 
        <div>
            <CardUnd>
                <img src={'https://picsum.photos/300/300'}/>        
                <p>Planeta: { trip.planet }</p>
                <p>Duração em dias: { trip.durationInDays }</p>
                <p>Data: { trip.date }</p>
                <p>Nome: { trip.name }</p>
                <p>Descrição: { trip.description }</p>

                <h4>Passageiro </h4>

                {trip.candidates && trip.candidates.map((candidato) => {
                    return( 
                    <>
                    <p>Nome: { candidato.name}</p>
                    <p>Idade:{candidato.age}</p>
                    <p>Motivo: {candidato.applicationText}</p>
                    <p>Profissão:{candidato.profession}</p>
                    <p>País:{candidato.country}</p>                    
                    </>
                    )
                }
                )}                      
            </CardUnd>
                        
        </div>
    )
}

export default CardDetailsTrips