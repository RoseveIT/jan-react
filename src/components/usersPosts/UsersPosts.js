import React, {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {UserP} from "./UserP";

const UsersPosts = () => {

    const [usersPosts, setUsersPosts] = useState([]);

    useEffect(()=>{
        userService.getUsers().then(value => value.data).then(value => setUsersPosts([...value]))
    },[])



    return (
        <div>
            {usersPosts.map(userPost=><UserP key={userPost.id} userPost={userPost} userId={userId}/>)}
        </div>
    );
};


export {UsersPosts};