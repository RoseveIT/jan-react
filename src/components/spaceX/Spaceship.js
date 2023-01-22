import React from "react";

const Spaceship = ({spaceship}) => {
    const {links, mission_name, launch_year} = spaceship
    return (
        <div>
            <h2>{mission_name} - {launch_year}</h2>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Spaceship};