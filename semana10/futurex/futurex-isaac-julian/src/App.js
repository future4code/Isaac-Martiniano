import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import FormPage from './FormPage/FormPage';
import CreateTripPage from './Pages/CreateTripPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/application-form">
          <FormPage/>
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage/>
        </Route>

        <Route path="/">
          <div><h1> Error 404! Digite o endereço correto</h1></div>
        </Route>

      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
