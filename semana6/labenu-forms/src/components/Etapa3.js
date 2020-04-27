import React from "react";


class Etapa3 extends React.Component {
  render() {
   
    return (
      <div>
        <h1>Etapa 3 - Informações gerais de Ensino</h1>
        <form>
            <div>
                <p><label>5. Porque você não terminou um curso de Graduação?</label></p>
                <p><input type="name"/></p>
            </div>
            <div>
            <p><label>6. Você fez algum curso complementar?</label></p>
                <p><select>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                    <option>Não fiz nenhum curso complementar</option>
                </select></p>   
            </div>
        </form>        
      </div>
    );
  }
}

export default Etapa3;