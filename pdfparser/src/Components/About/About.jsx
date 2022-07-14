import React from 'react'
import "./About.css"
import round from "../../img/round.png";
import Card from "../Card/Card";
import Sample from './Sample.pdf'
import {themeContext} from "../../Context";
import {useContext} from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
        <a href={Sample} download>
          <button className="button s-button">See Samples</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        
        <div style={{left:'24rem'}}>
          <Card
            emoji={round}
            heading={"Reliable"}
            detail={"Most Reliable Site on the Internet .Your details are safe and secure"}
          />
    </div>
        {/* second card */}
        <div style={{top:"12rem",left:"6rem"}}>
          <Card
            emoji={round}
            heading={"Easy Use"}
            detail={"The Site is very easy to use and requires no prior knowledge"}
          />
          </div>
        
        {/* 3rd */}
        <div  style={{top:"19rem",left:"22rem"}}>
          <Card
            emoji={round}
            heading={"Trusted"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

    
      

export default Services
