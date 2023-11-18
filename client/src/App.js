//import logo from './logo.svg';
import './App.css';
//import NavBar  from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./components/pages/Home.js";
import LogIn from "./components/pages/LogIn.js";
import Create from "./components/pages/Create.js";
import SignUp from "./components/pages/SignUp.js";
import Search from "./components/pages/Search.js"
import Profile from "./components/pages/Profile.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={ <Search/>} />
          <Route path="/profile" element={ <Profile/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;



