import React from "react";
import "./Portfolio.css";
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/event.PNG';
import Ecommerce from "../../img/social.PNG";
import HOC from "../../img/responsive_webpage.PNG";
import MusicApp from "../../img/website.PNG";
import Inccupation from "../../img/inccubation.PNG";
import OLX from "../../img/olx.PNG"

import 'swiper/css'
import {themeContext} from "../../Context"
import { useContext } from 'react'

const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{color: darkMode? 'white':''}}>Recent Project</span>
      <span>Portfolio</span>
      {/*Slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Inccupation} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OLX} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
