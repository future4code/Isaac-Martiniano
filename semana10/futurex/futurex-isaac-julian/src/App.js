import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import FormPage from './Pages/FormPage/FormPage';
import CreateTripPage from './Pages/CreateTripPage/CreateTripPage';
import AdmHomePage from './Pages/AdmHomePage/AdmHomePage';
import TripsDetailsPage from './Pages/TripsDetailsPage/TripsDetailsPage';
import ListTripsPage from './Pages/ListTripsPage';

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
        <Route exact path="/login/adm-home">
          <AdmHomePage/>
        </Route>
        <Route exact path="/trips/details">
          <TripsDetailsPage/>
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage/>
        </Route>

        <Route path="/">
          <div><h1> Error 404! Digite o endereço correto</h1></div>
        </Route>

      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
