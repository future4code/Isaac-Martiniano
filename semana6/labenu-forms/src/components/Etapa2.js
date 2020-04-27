import React from "react";


class Etapa2 extends React.Component {
  render() {
   
    return (
      <div>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <form>
            <div>
                <p><label>5. Qual Curso?</label></p>
                <p><input type="name"/></p>
            </div>
            <div>
                <p><label>6. Qual Unidade de Ensino?</label></p>
                <p><input type="name"/></p>
            </div>
            
        </form>  
        
      </div>
    );
  }
}

export default Etapa2;