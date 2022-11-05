import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
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
        <div className="app"> 
            <div className="haut"></div>

            <h2>C’EST FACILE <br /> DE 
                TROUVER <br />  UNE MAISON <br /> A LOUER 
            </h2>
            <div className="image"> </div>
            <div className="sousimage"> </div>
            <div className="sousimage-blue"> </div>
            <div className="black"></div>
            <div className="blanc"></div>
            <p>Trouver une maison devient faciler</p>
            <button>
                <Link className="link" to='/acceuil'> RECHERCHER</Link>
            </button>


















            {/* <input type="text" placeholder="name"
            onChange={(e) => {
                SetSearchTerm(e.target.value)
            }} />
            {list.filter((nom) => {
                if (searchTerm== '') {
                    return nom
                } else if (nom.nom.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return nom
                }
            }).map((nom,age) => {
                return <div><p>{nom.nom}</p></div>
            })} */}
        </div>
    );
}
export default Home;