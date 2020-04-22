import React from 'react'
import './CardCompet.css'

function CardCompet(props) {
    return (
        <div className="cardcompet-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <h4>{ props.nome1 }</h4>
                <h4>{ props.nome2 }</h4>
                <h4>{ props.nome3 }</h4>
                <h4>{ props.nome4 }</h4>

                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardCompet;