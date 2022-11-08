import { React } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import './Search.css'
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




const Search = () => {

    //  const [searchTerm, SetSearchTerm] = useState('')

    return (
        <div className="Search">
            <div>
            <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" className="input-search" placeholder="RECHERCHER"/>

            </div>
            <button><Link> <i class="fa-regular fa-filter"></i></Link></button>



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
            })}  */}
        </div>
    )
}
export default Search