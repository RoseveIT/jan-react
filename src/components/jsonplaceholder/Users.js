import React, {useEffect, useState} from "react";

import './User.css'
import {User} from "./User";
import {userService} from "../../services/userService";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    },[])



    return (
        <div>
            <div className='item'>{userDetails && <div>{userDetails.id} - {userDetails.username} - {userDetails.email}</div>}</div>

            <hr/>

            {users.map(user=><User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};

export {Users};