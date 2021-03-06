import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header.js"
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer.js";
import CrewList from "./components/CrewList/CrewList.js";
import CrewProfile from "./components/CrewProfile/CrewProfile.js";
import Error from "./components/Error.js"

import './App.css';


function App () {
  return (
      <Switch>
        <Route exact path="/profile"
          render={() => {
            return (
              <div className="App">
                <Header/>
                <Navigation/>
                <CrewProfile/>
                <Footer/>
              </div>
            )
          }}
        />
        <Route exact path="/" 
          render={() => {
            return (
              <div className="App">
              <Header/>
              <Navigation/>
              <CrewList/>
              <Footer/>
              </div>
            )
          }}
        />
        <Route component={Error}/>
      </Switch>
  );
}


export default App;
