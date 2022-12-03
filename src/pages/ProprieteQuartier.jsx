import React from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./ProprieteQuartier.css";

const ProprieteQuartier = () => {
  const [maisons, setMaisons] = useState([]);
  const idQuartier = useLocation().pathname.split("/")[2];
  console.log(idQuartier);

  useEffect(() => {
    const fetchMaisons = async () => {
      const result = await axios("http://localhost:3001/maisons");
      setMaisons(result.data);
    };
    fetchMaisons();
  }, []);
  // console.log(maisons)

  const result = maisons.filter(resVal);

  function resVal(maison) {
    if (maison.id_quartier == idQuartier) {
      console.log(maison.id_quartier);
      return maison;
    }
  }

  return (
    <div>
      <div className="card">
        <div className="text-card">
          {result.map((item) => (
            <div className="map-card" key={item.id}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image1}
                    alt="First slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image2}
                    alt="Second slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image3}
                    alt="Third slide"
                  />
                  <h5>{item.prix + " " + "FCFA"} </h5>
                  <p>{item.description}</p>
                </Carousel.Item>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default ProprieteQuartier;
