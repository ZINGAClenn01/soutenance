import React from "react";
import Search from "../components/Search";
import './Propriete.css'
// import alouer from '../assets/images/a-louer.png'
import imgAlouer from '../assets/images/Alouer.png'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
// import Maison from "../components/Maison"
import MaisonModerne from "../components/MaisonModerne"
import axios from 'axios';
import { useState, useEffect } from "react";

const Propriete = () => {

    const [maisons, setMaisons] = useState([])

    
    useEffect(() => {
        const fetchMaisons = async () => {
            const result = await axios(
                'http://localhost:3001/maisons',
            );
            setMaisons(result.data);
        };
        fetchMaisons();
    },[])
    console.log(maisons)


    const [quartiers, setQuartiers] = useState([])

    
    useEffect(() => {
        const fetchQuartiers = async () => {
            const resultat = await axios(
                'http://localhost:3001/quartiers',
            );
            setQuartiers(resultat.data);
        
        };
        fetchQuartiers();
    },[])
    console.log(quartiers)

    return (
        <div>
            <Search />
            <MaisonModerne />

            <div className="titre-haut">
                <p>Selamat Pagi</p>
                <p>
                    Hello Bonibarbar
                </p>
            </div>
            <div className="maison-moderne">
                <h4>
                    Nouvelles Maisons modernes
                </h4>
                    
                    
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
             
        </div>
    )
}
export default Propriete