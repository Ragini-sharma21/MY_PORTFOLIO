import React from 'react'
import './Intro.css'
import Facebook from '../../img/Facebook.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import newpdf from '../../img/newpdf.png';
import pdf from '../../img/pdf.png';
import FloatinDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span>PDF Parser For</span>
                <span>FIR Copies</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet, assumenda nostrum inventore illum tenetur molestias quibusdam, sed similique, laborum omnis ut saepe soluta eos. Voluptatibus mollitia accusantium optio eius?</span>
            </div>
            <button className="button
            i-button">UploadPdf</button>

            <div className="i-icons">
               <img src={Facebook} alt=""/> {/*<a href=''></a> */}
              <img src={instagram} alt=""/> 
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={pdf} alt=""/>
            <img src={newpdf} alt=""/>
        <div style={{top: '-4% ',left: '68%'}}>
        <FloatinDiv image={crown} txt1='Extract'  txt2='Developer'/>
        </div>
        <div style={{top:'18rem',left:'0rem'}}>
      <FloatinDiv image={thumbup} txt1='Upload' txt2='Files'/>
        </div>
        </div>
        </div>
        
      
    
  )
}

export default Intro
