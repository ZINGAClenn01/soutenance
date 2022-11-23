import React from "react";
import './DetailProp.css'
import Nav from "../components/Nav";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DetailProp = () => {

    const [maisons, setMaisons] = useState([])

    const idMaison = useLocation().pathname.split('/')[2]

    useEffect(() => {
        const fetchMaisons = async () => {
            const result = await axios(
                'http://localhost:3001/maisons',
            );
            setMaisons(result.data);
        };
        fetchMaisons();
    },[])
    
    
    const result = maisons.filter(resVal);

    function resVal(maison) {  if(maison.id_maison==idMaison) {console.log(maison); return maison } }

    return (
        <div>
             <div className="card">
                    <div className="text-card">
                        {result.map(item =>( 
                            <div className="map-card"  key={item.id}>
                                <h1> setId({item.id_maison}) </h1>
                                <img src={item.image1} alt="" />
                                <div className="row justyfie2">
                                    <p>
                                        {item.prix}  
                                    </p> 
                                    <p>
                                        {item.prix}  
                                    </p>
                                </div>
                                <div className="div-quartier">
                                    <p><i class="fa-solid fa-map-location-dot"></i> {item.id_quartier}</p>
                                </div>
                                <div className="row div-quartier-plus">
                                    <p>{item.description}</p>
                                    
                                </div>
                            </div>
                        ))}
                    
                        
                    </div> 
                </div>
            <Nav/>
        </div>
    )}

export default DetailProp