import React from 'react'
import styled from 'styled-components'
import CardTrip from './CardTrip'

const CardTripContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
`

const AllTrip = (props) => {
    
    return(
        <CardTripContainer>
            {props.trips.map((trips) => {
                return <CardTrip trips={trips}/>
            })}                     
        </CardTripContainer>
    )
}
export default AllTrip