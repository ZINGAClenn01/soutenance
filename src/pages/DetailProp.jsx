import React from "react";
import './DetailProp.css'
// import alouer from '../assets/images/a-louer.png'
import imgSpace from '../assets/images/space.png'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const DetailProp = () => {
    return (
        <div>
            <div className="img-space row align">
                <img src={imgSpace} alt="" />
            </div>
            <Nav/>
        </div>
    )}

export default DetailProp