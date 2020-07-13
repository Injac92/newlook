import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
    return(
        <div className="footer">
            <div className="social">
                <div className="social_facebook"></div>
                <div className="social_twiter"></div>
                <div className="social_linkedin"></div>
                <div className="social_youtube"></div>
            </div>
            <div className="site_map">
                <ul className="map_header">
                    <li className="map_menu">filming in serbia
                        <ul className="sub_menu">
                            <li>Incentives</li>
                            <li>Production Directory</li>
                            <li>Permits and Procedures</li>
                            <li>General info</li>
                            <li>Made in Serbia</li>
                            <li>VFX</li>
                        </ul>
                    </li>
                    <li className="map_menu">film friendly serbia
                        <ul className="sub_menu">
                            <li>Film Friendly Towns & Municipalities</li>
                            <li>Film Friendly Institutions</li>
                            <li>Film Friendly Certification</li>
                        </ul>
                    </li>
                    <li className="map_menu">locations
                        <ul className="sub_menu">
                            <li>Search locations</li>
                            <li>My Projects</li>
                        </ul>
                    </li>
                    <li className="map_menu">training & events</li>
                    <li className="map_menu">become sfc member
                        <ul className="sub_menu">
                            <li>How to become SFC member?</li>
                            <li>Why become SFC member?</li>
                            <li>Who are SFC members?</li>
                        </ul>
                    </li>
                    <li className="map_menu">about sfc
                        <ul className="sub_menu">
                            <li>Who we are?</li>
                            <li>What we do?</li>
                            <li>Our partners</li>
                            <li>Our members</li>
                            <li>Our Board of Directors</li>
                            <li>FAQ</li>
                            <li>Press kit</li>
                            <li>Projects</li>
                        </ul>
                    </li>
                    <li className="map_menu">news</li>
                    <li className="map_menu">contact</li>
                </ul>
            </div>
        </div>
    )
}