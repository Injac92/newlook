import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.png"

export default function Header() {
    return(
        <BrowserRouter>
         <div className="header">

                <img src={logo} alt="logo"></img>

            <div className="header_search">
                <form action="GET">
                    <input className="input_left" type="text"></input>
                    <input className="input_submit" type="submit"/>
                </form>
            </div>
            <div className="lang">
                <Link to="/">
                    <span className="eng_lang">ENGLISH</span>
                </Link>
                <Link to="/profile">
                    <span className="srb_lang">SERBIAN</span>
                </Link>
            </div>
        </div>       
        </BrowserRouter>

    )
}