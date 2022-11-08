import React from "react";
import Search from "../components/Search";
import './Propriete.css'
// import alouer from '../assets/images/a-louer.png'
import imgAlouer from '../assets/images/Alouer.png'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Propriete = () => {
    return (
        <div>
            <Search/>
            <div className="titre-haut">
                <a href="">Selamat Pagi</a>
                <p>
                    Hello Bonibarbar
                </p>
            </div>
            <div className="maison-moderne">
                <h4>
                    Nouvelles Maisons modernes
                </h4>
                <div className="row">
                    <Link className="link" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
                    <Link className="link" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
                </div>
            </div>
            <div className="maison-alouer">
                <h4>
                    Maisons a louer
                </h4>
                <div className="row">
                    <Link className="link" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
                    <Link className="link" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
                    <Link className="link" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
                </div>
            </div>
            <div className="occasion-vente">
                <h4 className="h4">
                    Occasion de vente
                </h4>
                <div className="row align" >
                    <Link className="link" to='/detail-propriete'> <img src={imgAlouer} alt="" /></Link>
                   <div>
                         <h4 >
                            Maison a vendre
                        </h4>
                        <h5>
                            2 chambres 2 douche 
                        </h5>
                        <h6>
                            Au ford de l’eau
                        </h6>
                   </div>
                   
                </div>
            </div>
            <Nav/>
        </div>
    )
}
export default Propriete