import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Nav from "../components/Nav";

// import { useState } from "react";
// import image from '../assets/images/imagehome.png'

// const list = [
//     {id: '1', nom: 'sam', age: '20'},
//     {id: '1', nom: 'samy', age: '22'},
//     {id: '1', nom: 'sammies', age: '24'},
//     {id: '1', nom: 'pammies', age: '24'},
//     {id: '1', nom: 'tammies', age: '24'},
//     {id: '1', nom: 'cammies', age: '24'},
//     {id: '1', nom: 'fammies', age: '24'},
// ]

const Home = () => {
    // const [searchTerm, SetSearchTerm] = useState('')
  
    return (
        <div className="application justifie1"> 

            <div className="row justifie1 flex-col">
                <div>
                    <div className="top"></div>
                    <h2>C’EST FACILE <br /> DE 
                        TROUVER <br />  UNE MAISON <br /> A LOUER 
                    </h2>
                </div>
                <div>
                    <div className="image"> </div>
                </div>
                <div>
                    <div className="blanc">
                    <p>Trouver une maison devient faciler</p>
                    <Button className="button-home">
                        <Link className="link" to='/acceuil'> RECHERCHER UNE MAISON</Link>
                    </Button>
                    </div>
                </div>
            </div>







            {/* <div className="haut-bas">
                <div className="haut"></div>
                
                <div className="sousimage-blue"> </div>
                
            </div>
            <div className="haut"></div> 

            <h2>C’EST FACILE <br /> DE 
                TROUVER <br />  UNE MAISON <br /> A LOUER 
            </h2>
             
             */}
        </div>
    );
}
export default Home;