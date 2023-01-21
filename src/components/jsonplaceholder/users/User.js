import React from "react";

import '../posts/Post.css'

const User = ({user, setUserDetails}) => {
    const {id, name} = user
    return (
        <div className='item'>
            {id} - {name}
            <button onClick={()=>setUserDetails(user)}>Get Info</button>
        </div>
    );
};

export {User};