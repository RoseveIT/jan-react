import React from "react";

const Spaceship = ({spaceship}) => {
    const {links, name} = spaceship
    return (
        <div>
            <h2>{name}</h2>
            <img src={links.patch.small} alt={name}/>
        </div>
    );
};

export {Spaceship};