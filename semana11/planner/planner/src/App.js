import React from 'react';
import Planner from './components/Planner';
import styled from 'styled-components'


const Container = styled.div`  
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  text-align: center;
  padding-top: 3vh;
`


function App() {
  return (
    <Container>
      <h1>PLANNER</h1>
      <Planner/>
    </Container>
  );
}

export default App;
