import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.png"

export default function Header() {
    return(
        
         <div className="header">
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
            <div className="search_wrapper">
                <div className="header_search">
                    <form action="GET">
                        <input className="input_left" type="text"></input>
                        <input className="input_submit" type="submit"/>
                    </form>
                </div>
                <div className="lang">
                    <span className="eng_lang">ENGLISH</span>
                    <span className="srb_lang">SERBIAN</span>
                </div>
            </div>
        </div>       
        

    )
}