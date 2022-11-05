import React from "react";
import Search from "../components/Search";
import './About.css'
// import alouer from '../assets/images/a-louer.png'
import imgAlouer from '../assets/images/Alouer.png'

const About = () => {
    return (
       <>
            <Search/>
            <div >
                <div className="button">
                    <button>
                        <div>
                            <p>quartier</p>
                            <p>Quartier</p>
                        </div>
                    </button>
                    <button>
                        <div>
                            <p>quartier</p>
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
                        <img src={imgAlouer} alt="" />
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
                    <img src={imgAlouer } alt="" />
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
        </> 
    );
}
export default About;