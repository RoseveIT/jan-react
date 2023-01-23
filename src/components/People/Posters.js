import React, {useEffect, useState} from "react";
import {userService} from "../../services";
import {Poster} from "./Poster";

const Posters = ({userId}) => {
    const [posters, setPosters] = useState([]);

    useEffect(()=>{
        userService.getByUserId(userId).then(({data})=>setPosters([...data]))
    },[userId])

    return (
        <div>
            {posters.map(poster=><Poster key={poster.id} poster={poster}/>)}
        </div>
    );
};


export {Posters};