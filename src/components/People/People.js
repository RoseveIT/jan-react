import React, {useEffect, useState} from "react";
import {userService} from "../../services";
import {Human} from "./Human";
import {Posters} from "./Posters";

const People = () => {
    const [people, setPeople] = useState([]);
    const [userId, serUserId] = useState(null);

    useEffect(()=>{
        userService.getUsers().then(({data}) => setPeople([...data]))
    },[])

    return (
        <div>
            {
                people.map(human=><Human key={human.id} human={human} serUserId={serUserId}/>)
            }
            <hr/>
            {userId&&<Posters userId={userId}/>}
        </div>
    );
};

export {People};