
import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from './Components/About/About';
import Works from './Components/Works/Works';
import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
import "./App.css";

 function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Works/>
    <Reviews/>
    <Contact/>
      
    </div>
  )
}
export default App

