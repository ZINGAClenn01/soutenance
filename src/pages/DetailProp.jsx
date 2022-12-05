import React from "react";
import "./DetailProp.css";
import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';


const DetailProp = () => {
  const [maisons, setMaisons] = useState([]);
  const [num, setNum] = useState([]);
  const idMaison = useLocation().pathname.split("/")[2];
  // console.log(idMaison);
  useEffect(() => {
    const fetchMaisons = async () => {
      const result = await axios("http://localhost:3001/maisons");
      setMaisons(result.data);
      setNum(result.data[0].telephone_proprietaire)
      console.log(num);
    };
    fetchMaisons();
  }, []);

  const result = maisons.filter(resVal);

  function resVal(maison) {
    if (maison.id_maison == idMaison) {
      return maison;
    }
  }
  

  return (
    <div className="mere-carte">
      
      <div className="carte"> 
          {result.map((item) => (
            <div className="map-card container" key={item.id}>
              <Carousel
                className="Carousel card"
              >
                <Carousel.Item className="Carousel col-md-12 col-sm-12 mb-5 shadow-sm">
                  <img
                    className="d-block card w-75"
                    src={item.image1}
                    alt="Second slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
                <Carousel.Item className="Carousel col-md-12 col-sm-12 mb-5 shadow-sm">
                  <img
                    className="d-block card w-75"
                    src={item.image2}
                    alt="Second slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
                <Carousel.Item className="Carousel col-md-12 col-sm-12 mb-5 shadow-sm">
                  <img
                    className="d-block card w-75"
                    src={item.image3}
                    alt="Third slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
                <Carousel.Item className="Carousel col-md-12 col-sm-12 mb-5 shadow-sm">
                  <img
                    className="d-block card w-75"
                    src={item.image4}
                    alt="First slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
                <Carousel.Item className="Carousel col-md-12 col-sm-12 mb-5 shadow-sm">
                  <img
                    className="d-block card w-75"
                    src={item.image5}
                    alt="First slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
              </Carousel>
            </div>
          ))}
        <div className="mom-btn-contact">
        <Button className='btn-contact' onClick={(e)=> alert(maisons)} variant="primary" size="lg">
            contactez le proprietaire
      </Button> 
      <Button className='btn-contact' variant="primary" size="lg">
            retour
      </Button> 
        </div>
        </div>
        
      <Nav />
    </div>
  );
};

export default DetailProp;
