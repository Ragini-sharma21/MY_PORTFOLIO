
import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from './Components/About/About';
import Works from './Components/Works/Works';
import Reviews from './Components/Reviews/Reviews';
import "./App.css";

 function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Works/>
    <Reviews/>
      
    </div>
  )
}
export default App

