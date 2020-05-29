import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import CardDetailsTrips from './CardDetailsTrips'
import axios from 'axios'


const CardTripContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
`

const SectionDetailsTrips = () => { 

  const homePage = useHistory();
  const goToHomePage = () => {
      homePage.push("/")
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    //console.log(token)
    if(token === null){
      homePage.push("/")
    }
  },[homePage])


  const [idTrip, setIdTrip] = useState([])
  
  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/isaac/trips').then(response => {
      setIdTrip(response.data.trips)      
    })

    for(let viagem of idTrip){
      executeRequest(viagem.id)
    } 
  }, []);

  const id = idTrip
    console.log("ids",id)

    const DetailsOfTrips = [{
        "id": "NoIFVcOiSgTKTIPVZwXS",
        "planet": "Mercúrio",
        "durationInDays": 7,
        "date": "31/12/2019",
        "name": "Ano novo em Mercúrio",
        "description": "Venha passar a virada pertinho do Sol!",
        "candidates": [
          {
            "id": "NAOp5L3Wuunexq9SbUso",
            "applicationText": "Quero muuuuuuito ir!!!",
            "profession": "Chefe",
            "age": 20,
            "name": "Astrodev",
            "country": "Brasil"
          }
        ]
      }
    ]

    const [detailsOfTrips, setDetailsOfTrips] = useState ()

    const executeRequest =  async (idviagem) => {
      const token = localStorage.getItem('token');
      console.log(idviagem)
      
     
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/isaac-julian/trip/${idviagem}`,{
          headers: {
            auth: token
          }
        }) 
        
        const novaViagem = [...idTrip]

        const viagem = idTrip.findIndex(viagem => viagem.id === response.data.trip.id)
        novaViagem[viagem].candidates = response.data.trip.candidates
        console.log('viagem',novaViagem)
        setIdTrip(novaViagem)
        console.log('response',response.data.trip)
      }
        console.log('executeRequest',executeRequest)
      

    
    return(
        <CardTripContainer>
            {idTrip.map((trip) => {
                return <CardDetailsTrips trip={trip}/>
            })},
            {idTrip.map((tripid) => {
                return <p onClick={() => executeRequest(tripid.id)}>{tripid.id}</p> 
            })}
            
                                                  
        </CardTripContainer>
    )
}
export default SectionDetailsTrips