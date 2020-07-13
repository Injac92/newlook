import React from "react";

import "./CrewItem.css"

export default function CrewItem() {
    return (
        <div className="crew_item_container">
            <div className="crew_item_img"></div>
            <div className="crew_item_descr">
                <h3>Nikola Stefanovic</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque.</p>
                <div className="social_contact">
                    <div className="more_contact">More</div>
                    <div className="www_contact contact_img"></div>
                    <div className="mail_contact contact_img"></div>
                </div>
            </div>
        </div>
    )
}