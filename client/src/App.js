//import logo from './logo.svg';
import './App.css';
//import NavBar  from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Create from "./components/pages/Create";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



