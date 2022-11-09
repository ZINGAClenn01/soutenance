import React from "react";
import Search from "../components/Search";
import './About.css'
// import alouer from '../assets/images/a-louer.png'
import imgAlouer from '../assets/images/Alouer.png'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const About = () => {
    return (
       <>
            <Search/>
            <div >
                <div className="button">
                    <button>
                        <div>
                            <p><i class="fa-solid fa-location-dot"></i></p>
                            <p>Quartier</p>
                        </div>
                    </button>
                    <button>
                        <div>
                            <p><i class="fa-solid fa-calendar"></i></p>
                            <p>Quartier</p>
                        </div>
                    </button>
                </div>
                <div className="categories">
                    <p>Categories</p>
                    <div className="categories-btn" >
                        <button>Maison</button>
                        <button>Villa</button>
                        <button>Appartement</button>
                        <button>Chambres</button>
                    </div>
                </div>
                <div className="card">
                    <div className="text-card">
                        <Link className="link" to='/propriete'> <img src={imgAlouer} alt="" /></Link>
                        <div className="row justyfie2">
                            <p>
                                Maison Moderne en dure
                            </p> 
                            <p>
                                Rp. 250.000/ Mois
                            </p>
                        </div>
                        <div className="div-quartier">
                            <p><i class="fa-solid fa-map-location-dot"></i> Ntchengue, derriere soco-tp</p>
                        </div>
                        <div className="row div-quartier-plus">
                            <p><i class="fa-sharp fa-solid fa-light-emergency"></i> Tout inclus</p>
                            <p> <i class="fa-solid fa-house-signal"></i> wifi</p>
                            <p><i class="fa-solid fa-calendar"></i> periode indeterminees</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    
                    <div className="text-card">
                        <Link className="link" to='/propriete'> <img src={imgAlouer} alt="" /></Link>
                        <div className="row justyfie2">
                            <p>
                                Maison Moderne en dure
                            </p> 
                            <p>
                                Rp. 250.000/ Mois
                            </p>
                        </div>
                        <div className="div-quartier">
                            <p> Ntchengue, derriere soco-tp</p>
                        </div>
                        <div className="row div-quartier-plus">
                            <p> Tout inclus</p>
                            <p> Avec wifi</p>
                            <p> periode indeterminees</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    
                    <div className="text-card">
                        <Link className="link" to='/propriete'> <img src={imgAlouer} alt="" /></Link>
                        <div className="row justyfie2">
                            <p>
                                Maison Moderne en dure
                            </p> 
                            <p>
                                Rp. 250.000/ Mois
                            </p>
                        </div>
                        <div className="div-quartier">
                            <p> Ntchengue, derriere soco-tp</p>
                        </div>
                        <div className="row div-quartier-plus">
                            <p> Tout inclus</p>
                            <p> Avec wifi</p>
                            <p> periode indeterminees</p>
                        </div>
                    </div>
                </div>
            </div>
            <Nav/>

        </> 
    );
}
export default About;