import React, {useEffect, useState} from "react";

import './Post.css'
import {userService} from "../../../services/userService";
import {Post} from "./Post";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(()=>{
        userService.getPosts().then(value => value.data).then(value => setPosts([...value]))
    },[])

    return (
        <div>
            <div className='item'>{postDetails && <div>{postDetails.id} <br/> {postDetails.body} <br/> {postDetails.title}</div>}</div>

            <hr/>

            {posts.map(post=><Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {Posts};