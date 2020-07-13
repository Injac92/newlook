import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header/Header.js"
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer.js";
import CrewList from "./components/CrewList/CrewList.js";
import CrewProfile from "./components/CrewProfile/CrewProfile.js";
import Error from "./components/Error.js"

import './App.css';
import { render } from 'react-dom';


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
    
    // <div className="App">
    //   <Header/>
    //   <Navigation/>
    //   {/* <CrewList/> */}
    //   <CrewProfile/>
    //   <Footer/>
    // </div>
  );
}


export default App;
