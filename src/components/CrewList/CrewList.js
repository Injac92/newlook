import React from "react";
import CrewItem from "../CrewItem/CrewItem.js"

import search from "../../images/search_icon_big.png";

import "./CrewList.css";

export default function CrewList() {
    return(
        <div className="crew_list_container">
            <div className="crew_list_cover">
                <p>CREW</p>
            </div>
            <div className="crew_list_search">
                <img src={search} alt=""/>
                <p>CREW</p>
                <div className="search_separator"></div>
                <div className="search_bar">
                    <form action="GET">
                        <input className="search_checklist" type="text"/>
                        <input className="search_submit" type="submit" value="SEARCH"/> 
                    </form>
                </div>
            </div>
            <div className="grid_system">
                <div className="crew_list_items">
                    <CrewItem/>
                    <CrewItem/>
                    <CrewItem/>
                    <CrewItem/>
                    <CrewItem/>
                    <CrewItem/>
                </div>
            </div>

        </div>
    )
}