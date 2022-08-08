

import Navbar from "./Components/Navbar/Navbar";
 import Intro from "./Components/Intro/Intro";
 import About from './Components/About/About';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
 import Reviews from './Components/Reviews/Reviews';
import Contact from './Components/Contact/Contact';
 import Footer from './Components/Footer/Footer';
import "./App.css";
import {themeContext} from './Context'
import {useContext} from "react";

//  function App() {
//   const theme = useContext(themeContext);
//   const darkMode=theme.state.darkMode;
//   return (
//     <div className="App"
//       style={{
//         background:darkMode?"black":'',
//         color:darkMode?"white":'',
//       }}>
//     <Navbar/>
//     <Intro/>
//     <About/>
//     <Works/>

//     <Reviews/>
//     <Contact/>
//     <Footer/>
      
//     </div>
//   );
// }
// export default App



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
       <Intro />
       <About />
       <Works />
       <Portfolio/>
       <Reviews/>
      <Contact />
      <Footer />  
    </div>
  );
} 

export default App;