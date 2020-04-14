import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardCompet from './components/CardCompet/CardCompet' 
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/Y8UZVA0.png " 
          nome="Isaac A. MArtiniano" 
          descricao="Oi, eu sou iMartiniano. Estou estudando na Labenu_ e amo programação, em muito breve trabalharemos juntos"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        
        <CardPequeno 
          imagem="https://image.freepik.com/vetores-gratis/uma-casa-de-dois-andares_1308-16176.jpg" 
          nome="Endereço :" 
          descricao="Rua bela vista" 
        />
        
        <CardPequeno 
          imagem="https://www.gremiopedia.com/images/5/5c/Email.png" 
          nome="Email :" 
          descricao="isaacam517@gmail.com" 
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/9/9e/Tmp_4367-160101_112117_chat_bg1517722611.jpg  " 
          nome="Interpool" 
          descricao="Corrigindo as falhas do banco e dados, e segurança do sistema!" 
        />
        
        <CardGrande 
          imagem="https://flarconsulting.com.br/wp-content/uploads/2019/04/Microsoft_PESTEL_Analysis.jpg" 
          nome="Microsoft" 
          descricao="Desenvolvedor do W10" 
        />
      </div>

      <div className="page-section-container">
        <h2>Habilidades</h2>
        <CardCompet 
         
          nome="HTML" 
          nome1="CSS" 
          nome2="JavaScript" 
          nome3="Grid" 
          nome4="FlexBox" 

          descricao="Sempre em busca de conhecimento!" 
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
