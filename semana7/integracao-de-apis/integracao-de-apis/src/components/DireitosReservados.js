import React from 'react';

export class LinhaCopyrigth extends React.Component{
    render(){
        return(
            <>
                <div className={'div-rodape'}>
                    <p className={'rodape'}>{this.props.textoDoRodape}</p>
                </div>
            </>
        )
    }
}
  

//elemento neto (filho do LoginUsuario.js que é filho do App.js)