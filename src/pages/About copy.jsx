import React from "react";
import Search from "../components/Search";
// import Categories from "../components/Categories"
import './About.css'
// import alouer from '../assets/images/a-louer.png'
// import imgAlouer from '../assets/images/Alouer.png'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import axios from 'axios';
import { useState, useEffect } from "react";


const About = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3001/categories',
            );
            setData(result.data);
        };
        fetchData();
    },[])

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
    
     const [idcategorie, setidcategorie] = useState("")

    const maisonFlitrer = maisons.filter((item) =>{
      return item.id_categorie === idcategorie })

      const [AllMaisons, setAllMaisons] = useState(maisons)
      console.log(maisons)


    return (
       <>
            <Search />
            <div >
                <div className="button">
                    <Link to='/quartiers' >
                        <button>
                            <div>
                                <p><i class="fa-solid fa-location-dot"></i></p>
                                <p>Quartier</p>
                            </div>
                        </button>
                    </Link>
                    <Link to='/propriete'>
                        <button>
                            <div>
                                <p><i class="fa-solid fa-calendar"></i></p>
                                <p>A la une</p>
                            </div>
                        </button>
                    </Link>
                </div>
                {/* <Categories/> */}
                 <div className="categories">
                    <div className="row justyfie1">
                        <p>Categories</p>
                        <button onClick={()=>{setAllMaisons(maisons);}} className="btn-all">Toutes</button>
                    </div>
                    <div className="categories-btn" >
                        {data.map(item =>(
                            <button onClick={()=>{setidcategorie(item.id_categorie); console.log(idcategorie);}} key={item.id}>{item.categorie} </button>
                        ))}
                    </div>
                </div> 

                <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                </div>
                
                <div className="card">
                    <div className="text-card">
                        <Link className="link" to='/detail-propriete'> 
                        {maisons.map(item =>(
                            <div className="map-card" key={item.id}>
                                <img src={item.image1} alt="" />
                                <div className="row justyfie2">
                                    <p>
                                        Maison Moderne en dure
                                    </p> 
                                    <p>
                                        {item.prix}  
                                    </p>
                                </div>
                                <div className="div-quartier">
                                    <p><i class="fa-solid fa-map-location-dot"></i> {item.id_quartier}</p>
                                </div>
                                <div className="row div-quartier-plus">
                                    <p><i class="fa-sharp fa-solid fa-light-emergency"></i> Tout inclus</p>
                                    <p> <i class="fa-solid fa-house-signal"></i> wifi</p>
                                    <p><i class="fa-solid fa-calendar"></i> periode indeterminees</p>
                                </div>
                            </div>
                        ))}
                        </Link>
                        
                    </div> 
                </div>
                {/* <div className="card">
                    
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
                </div> */}
            </div>
            <Nav/>

        </> 
    );
}
export default About;