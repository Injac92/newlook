import React from "react";

import profileImg from "../../images/profile_img.jpg";
import mail from "../../images/mail.png";
import web from "../../images/globe.png";

import "./CrewProfile.css";

export default function CrewProfile() {
    return (
        <div className="crew_profile_container">
            <div className="profile_map_path margin_30">
                <p className="color_grey">FILMING IN SERBIA > Production Directory > CREW > Postproduction > <span className="color_pink">Nikola Stefanovic</span></p>
            </div>
            <div className="profile_img margin_30">
                <img src={profileImg} alt="profile img"/>
            </div>
            <div className="profile_name margin_30" >
                <h1 className="color_pink">Nikola Stefanovic</h1>
            </div>
            <div className="profile_description margin_30">
                <p className="color_grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu eros nec dui suscipit interdum eu euismod leo. Curabitur cursus, urna at luctus efficitur, tellus nisl laoreet risus, ut porta augue ipsum eget diam.</p>
            </div>
            <div className="profile_service">
                <div className="margin_30">
                    <h2 className="profile_subtitle color_darkgrey">SERVICES AND CAPACITY</h2>
                    <div className="profile_separator"></div>
                    <p className="color_grey">Etiam interdum, leo nec lacinia sodales, tortor metus tristique ligula, ut aliquam magna felis vitae mi. Nam suscipit ultrices elit, vel consectetur sapien lobortis ut. Duis sollicitudin condimentum ante a rhoncus. Proin rhoncus odio vitae mauris sodales venenatis. Nunc lobortis scelerisque viverra. Donec massa ante, luctus sit amet iaculis ut, pretium euismod lectus.</p>
                </div>
            </div>
            <div className="profile_credits">
                <div className="margin_30">
                    <h2 className="profile_subtitle color_darkgrey">CREDITS</h2>
                    <div className="profile_separator"></div>
                    <p className="color_grey">Vivamus cursus ligula tincidunt lacus dictum pellentesque. Proin commodo leo diam, at molestie sapien posuere sit amet. Nam mattis auctor dui ut tempus. Praesent rhoncus tortor orci, quis mollis ex mollis sit amet. Sed bibendum nec quam eget faucibus. Curabitur ut risus in enim fringilla pretium in at odio. Suspendisse imperdiet consectetur luctus.</p>
                </div>
            </div>
            <div className="profile_contact">
                <div className="margin_30">
                    <h2 className="profile_subtitle color_darkgrey">CONTACT</h2>
                    <div className="profile_separator"></div>
                    <div className="profile_contact_mail">
                        <img className="profile_contact_icon" src={mail} alt="mail icon"/>
                        <p className="color_grey profile_contact_text">nikola.stevanovic@me.com</p>
                    </div>
                    <div className="profile_contact_web">
                        <img className="profile_contact_icon" src={web} alt="web icon"/>
                        <p className="color_grey profile_contact_text">www.nikolastefanovic.com</p>
                    </div>
                    <div className="profile_separator"></div>
                    <div className="profile_social">
                        <div className="profile_vimeo"></div>
                        <div className="profile_twiter"></div>
                        <div className="profile_linkedin"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}