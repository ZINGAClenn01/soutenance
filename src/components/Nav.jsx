import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return(
        <div className="nav">
            <button>
                <Link className="link" to='/acceuil'> <i class="fa-solid fa-user"></i></Link>
                <Link className="link" to='/acceuil'> <i class="fa-solid fa-house"></i></Link>
                <Link className="link" to='/'> <i class="fa-solid fa-house"></i> </Link>
                <Link className="link" to='/acceuil'><i class="fa-solid fa-house"></i></Link>
                <Link className="link" to='/acceuil'> <i class="fa-solid fa-bookmark"></i></Link>
            </button>
        </div>
    )
}
export default Nav