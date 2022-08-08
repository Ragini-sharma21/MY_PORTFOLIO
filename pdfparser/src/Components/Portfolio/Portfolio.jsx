import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import portimg5 from "../../img/portimg5.jpeg";
import portimg4 from "../../img/portimg4.jpeg";
import portimg1 from "../../img/portimg1.jpeg";
import portimg2 from "../../img/portimg2.jpeg";
import portimg3 from "../../img/portimg3.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={portimg5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portimg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;