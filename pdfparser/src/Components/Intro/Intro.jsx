import React,{useContext} from 'react'
import './Intro.css'
import Linkdin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import newpdf from '../../img/newpdf.png';
import Portfoliopic from '../../img/Portfoliopic.png';
import Github from "../../img/github.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {themeContext} from '../../Context';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hyy! I Am</span>
                <span>Ragini Sharma</span>
                <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
            </div>
            <button className="button
            i-button">UploadPdf</button>

            <div className="i-icons">
               <img src={Linkdin} alt=""/> {/*<a href=''></a> */}
               <img src={Github} alt=""/>
               <img src={instagram} alt=""/> 

            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={Portfoliopic} alt=""/>
            <img src={newpdf} alt=""/>
        <div style={{top: '-4% ',left: '55%'}}>
        <FloatingDiv image={crown} txt1='Web'  txt2='Developer'/>
        </div>
        <div style={{top:'18rem',left:'0rem'}}>
      <FloatingDiv image={thumbup} txt1='Programmar' />
        </div>
        
        <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur"
        style={{
          background:'#C2F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'
        }}>
        </div>
        </div>
        </div>
        
      
    
  )
}

export default Intro
