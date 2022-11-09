import React, { Component } from "react";
import Slider from "react-slick";
import imgAlouer from '../assets/images/Alouer.png'
import { Link } from "react-router-dom";
import alouer from '../assets/images/a-louer.png'
import deuxChambre from '../assets/images/maison2chambre.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 1,
        cssEase: "linear",
        pauseOnHover: true
      };
    return (
      <div className="maisonBox">
    
        <Slider className="slide" {...settings}>
          <div>
            
                <Link className="link maison" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
            
          </div>
          <div>
            
            <Link className="link maison" to='/detail-propriete'> <img src={alouer} alt="" /></Link>
            
          </div>
          <div>
            
                <Link className="link maison" to='/detail-propriete'> <img src={deuxChambre} alt="" /></Link>
            
          </div>
          
         
          
          
        </Slider>
      </div>
    );
  }
}