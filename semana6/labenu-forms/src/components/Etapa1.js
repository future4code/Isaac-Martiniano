import React from "react";


class Etapa1 extends React.Component {
  render() {
   
    return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1> 
            <form>
                <div>
                    <p><label>1. Qual o seu Nome?</label></p>
                    <p><input type="name"/></p>
                </div>
                <div>
                    <p><label>2. Qual sua Idade?</label></p>
                    <p><input type="name"/></p>
                </div>
                <div>
                    <p><label>3. Qual o seu Email?</label></p>
                    <p><input type="email"/></p>
                </div>
                <div>
                    <p><label>4. Qual a sua escolaridade?</label></p>
                    <p><select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select></p>   
                </div>
            </form>  
        </div>
    );
  }
}

export default Etapa1;
