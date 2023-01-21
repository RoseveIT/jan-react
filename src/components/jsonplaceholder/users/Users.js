import React, {useEffect, useState} from "react";

import '../posts/Post.css'
import {userService} from "../../../services/userService";
import {User} from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(()=>{
        userService.getUsers().then(value => value.data).then(value => setUsers([...value]))
    },[])

    return (
        <div>
            <div className='item'>{userDetails && <div>{userDetails.id} - {userDetails.name} - {userDetails.username} - {userDetails.email}</div>}</div>

            <hr/>

            {users.map(user=><User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};

export {Users};