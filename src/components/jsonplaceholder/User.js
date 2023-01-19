import React from "react";

import './User.css'

const User = ({user, setUserDetails}) => {
    const {id, name} = user
    return (
        <div className='item'>
            <div>{id} - {name}</div>
            <button onClick={()=>setUserDetails(user)}>Get Info</button>
        </div>
    );
};

export {User};