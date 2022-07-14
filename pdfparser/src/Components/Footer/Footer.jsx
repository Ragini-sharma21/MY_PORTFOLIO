import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>raginisharma6006845094@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Linkdin color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
        <span>@copyright Ragini sharma</span>
      </div>
    </div>
  );
};

export default Footer;