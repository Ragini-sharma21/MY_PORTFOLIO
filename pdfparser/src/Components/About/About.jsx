import React from 'react'
import "./About.css"
import round from "../../img/round.png";
import Card from "../Card/Card";
import Resume from './Ragini_sharma_Resume.pdf'
import {themeContext} from "../../Context";
import {useContext} from "react";
import { motion } from "framer-motion";


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 2,
    type: "spring",
  };
  return (

        <div className="about" id="about">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>More About</span>
        <span> Our services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "32rem" }}
          whileInView={{ left: "21rem" }} //24
          transition={transition}
        >
        
        
          <Card
            emoji={round}
            heading={"Reliable"}
            detail={"Most Reliable Site on the Internet .Your details are safe and secure"}
          />
    </motion.div>
        {/* second card */}
        
        <motion.div
          initial={{ left: "-4rem", top: "12rem" }}
          whileInView={{ left: "3rem" }}//top:"12rem",left:"6rem"
          transition={transition}
        >
        
          <Card
            emoji={round}
            heading={"Easy Use"}
            detail={"The Site is very easy to use and requires no prior knowledge"}
          />
          </motion.div>
        
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "32rem" }}
          whileInView={{ left: "19rem" }} //top:"19rem",left:"22rem"
          transition={transition}
        >
          <Card
            emoji={round}
            heading={"Trusted"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </motion.div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

    
      

export default Services
