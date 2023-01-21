import React, {useEffect, useState} from "react";
import {shipService} from "../../services/userService";
import {Spaceship} from "./Spaceship";

const Spaceships = () => {

    const [spaceships, setSpaceships] = useState([]);

    useEffect(()=>{
        shipService.getShips().then(value => value.data).then(value => setSpaceships([...value]))
    },[])

    return (
        <div>
            {spaceships.map((spaceship,index)=><Spaceship key={index} spaceship={spaceship}/>)}
        </div>
    );
};

export {Spaceships};