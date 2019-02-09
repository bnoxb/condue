import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SplashPage from './SplashPage/SplashPage';
import Menu from './Menu/Menu';
import ReservationContainer from './ReservationContainer/ReservationContainer';
import PatioContainer from './PatioContainer/PatioContainer';
import About from './About/About';

const My404 = () => {
  return(
    <div>
      You are Lost!!
    </div>
  )
}

const App = () => {
  return(
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={ SplashPage } />
        <Route exact path="/menu" component={ Menu } />
        <Route exact path="/reservation" component={ ReservationContainer }/>
        <Route exact path='/patio' component={ PatioContainer }/>
        <Route exact path='/about' component={ About }/>
        <Route component= { My404 }/>
      </Switch>
    </main>
  )
}

export default App;
