import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import imageshome from "../assets/images/images.jpg"


const Home = () => {

  return (
    <div className="App justifie1">
      <div className="mobile">
        <div className="">
          <div>
            <div className="top"></div>
            <h2>
              C’EST FACILE <br /> DE TROUVER <br /> UNE MAISON <br /> <span>A LOUER</span> 
            </h2>
          </div>
          <div className="">
            <div className="image"><img className="image-home" src={imageshome} alt="" /> </div>
          </div>
          <div >
            <div className="blanc">
              <p>Trouver une maison devient faciler</p>
              <Button className="button-home">
                <Link className="link" to="/acceuil">
                  RECHERCHER UNE MAISON
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* mode desktop */}
      <div className="desktop">
        <div className="desktop-home row justifie1 flex-col">
          <div className="texte-image">
            <div className="top"></div>
            <h2>
              C’EST FACILE <br /> DE TROUVER <br /> UNE MAISON <br /> A LOUER
            </h2>
            {/* <div className="imagedesktop"><img src={imageshome} alt="" /> </div> */}
          </div>
          <div>
            
          </div>
          <div>
            <div className="blanc">
              <p>Trouver une maison devient faciler</p>
              <Button className="button-home">
                <Link className="link" to="/acceuil">
                  RECHERCHER UNE MAISON
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
