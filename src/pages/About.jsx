import React from "react";
import './About.css'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import axios from 'axios';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RoomIcon from '@mui/icons-material/Room';



const About = () => {

    const [allHouse, setAllHouse] = useState(false)


    
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
      return item.id_categorie === idcategorie 
    })

      



    return (
       <>
            {/* <Search /> */}
            <div >
                <div className="button button-mobile">
                    <Link to='/quartiers' >
                        <Button>
                            <div>
                                <p><i class="fa-solid fa-location-dot"></i></p>
                                <p>Quartier</p>
                            </div>
                        </Button>
                    </Link>
                    <Link to='/propriete'>
                        <Button>
                            <div>
                                <p><i class="fa-solid fa-calendar"></i></p>
                                <p>A la une</p>
                            </div>
                        </Button>
                    </Link>
                </div>
                <div className="button-desketop">
                    <Link to='/quartiers' >
                        <Button className="Buttons-desk">
                            <div className="icon-text-desk">
                                <p><i class="fa-solid fa-location-dot"></i></p>
                                <p>Quartier</p>
                            </div>
                        </Button>
                    </Link>
                    <Link to='/propriete'>
                        <Button className="Buttons-desk">
                            <div className="icon-text-desk">
                                <p><i class="fa-solid fa-calendar"></i></p>
                                <p>A la une</p>
                            </div>
                        </Button>
                    </Link>
                </div>
                {/* <Categories/> */}
                <div className="categories categories-mobile">
                    <p>Categories</p>
                    <div className="ButtonGroup">
                        
                        {/* <button  onClick={()=>{ setAllHouse(false)}}  className="button-all">Toutes</button> */}
                        
                            <Button className="button-all" onClick={()=>{ setAllHouse(false)}}  variant="secondary">Toutes les maisons</Button>
                        
                    </div>
                    <div className="categories-btn" >
                        {data.map(item =>(
                           <div className="ButtonGroup">
                             {/* <button className="Buttons" onClick={()=>{setidcategorie(item.id_categorie); console.log(idcategorie); setAllHouse(true)}} key={item.id}>{item.categorie} </button> */}
                            <ButtonGroup className="Buttons" aria-label="Basic example">
                                <Button className="Buttons-btn" onClick={()=>{setidcategorie(item.id_categorie); console.log(idcategorie); setAllHouse(true)}} key={item.id} variant="secondary">{item.categorie} </Button>
                            </ButtonGroup>
                           </div>
 
                        ))}
                    </div>
                </div> 
                <div className="categories-desktop">
                    <p>Categories</p>
                    <div className="ButtonGroup-desk">
                        
                        {/* <button  onClick={()=>{ setAllHouse(false)}}  className="button-all">Toutes</button> */}
                        
                            <Button className="button-all" onClick={()=>{ setAllHouse(false)}}  variant="secondary">Toutes les maisons</Button>
                        
                    </div>
                    <div className="categories-btn-desk" >
                        {data.map(item =>(
                           <div className="ButtonGroup">
                             {/* <button className="Buttons" onClick={()=>{setidcategorie(item.id_categorie); console.log(idcategorie); setAllHouse(true)}} key={item.id}>{item.categorie} </button> */}
                            <ButtonGroup className="Buttons" aria-label="Basic example">
                                <Button className="Buttons-btn" onClick={()=>{setidcategorie(item.id_categorie); console.log(idcategorie); setAllHouse(true)}} key={item.id} variant="secondary">{item.categorie} </Button>
                            </ButtonGroup>
                           </div>
 
                        ))}
                    </div>
                </div> 
              {allHouse?(
                <div className="mom-filter container-fluid con row shadow-sm">
                    
                        
                        {maisonFlitrer.map(item =>(
                            <div className="map-card-flitrer col-md-4 shadow-sm" key={item.id}>
                                <Link className="link" to={`/detail-propriete/${item.id_maison}`}>
                                    <img className="image-maison mt-3 w-75" src={item.image1} alt="" />
                                </Link>
                                <div className="texte-description">
                                    <div className="row justyfie2">
                                        <p>
                                            {item.prix}  
                                        </p>
                                        <p className="desc"><i class="fa-solid fa-map-location-dot"></i> {item.description}</p>

                                    </div>
                                    {/* <div className="div-quartier">
                                    </div>
                                    <div className="row div-quartier-plus">
                                        <p><i class="fa-sharp fa-solid fa-light-emergency"></i> Tout inclus</p>
                                        <p> <i class="fa-solid fa-house-signal"></i> wifi</p>
                                    </div> */}
                                </div>
                            </div>
                        ))} 
                    </div> 
                
              ):(
                <div className="card-nan-filter row container-fluid shadow-sm">
                    
                        {maisons.map(item =>(
                            <div className="map-card-nanfiltrer card col-md-4 col-sm-12 mb-5 shadow-sm" key={item.id}>
                                <Link className="link" to={`/detail-propriete/${item.id_maison}`}> 
                                  <img className="w-75 mt-3" src={item.image1} alt="" />
                                </Link>
                                <div className="texte-description">
                                    <div className="row justyfie2">
                                        <p>
                                            {item.prix + " " + "FCFA"}  
                                        </p>
                                        <p><i class="fa-solid fa-map-location-dot"></i> {item.description}</p>

                                    </div>
                                    <div className="div-quartier">
                                    </div>
                                    {/* <div className="row div-quartier-plus">
                                        <p><i class="fa-sharp fa-solid fa-light-emergency"></i> Tout inclus</p>
                                        <p> <i class="fa-solid fa-house-signal"></i> wifi</p>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    
                </div>
              )}
            </div>
            <Nav/>

        </> 
    );
}
export default About;