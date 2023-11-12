//import logo from './logo.svg';
import './App.css';
import NavBar  from "./components/NavBar";
//import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import React from 'react';
import { LogIn } from "./components/pages/LogIn";
import {Create} from "./components/pages/Create";
import {Home} from "./components/pages/Home";
function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <LogIn />
    </div>
  );
}

export default App;
