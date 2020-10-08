import React, { useState } from 'react';
import Navbar from './components/layout/Navbar'
import Users from "./components/users/Users"
import './App.css';
import axios from "axios";
import Search from "./components/users/Search";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import About from "./components/pages/About"
import User from "./components/users/User"
import GitState from "./context/github/GitState"

const App =()=> {
    return (
      <GitState>
      <BrowserRouter>
      <div className="App">
       <Navbar/>
       <div className="container">
       <Switch>
         <Route exact path="/" render={props=>(
           <div>
           <Search/>
           <Users/>
            </div>
         )}>
        </Route>
       <Route exact path="/about" component={About}></Route>
       <Route exact path="/user/:login" component={User}/>
       </Switch>
       </div>
      </div>
      </BrowserRouter>
      </GitState>
    );
}
export default App;
