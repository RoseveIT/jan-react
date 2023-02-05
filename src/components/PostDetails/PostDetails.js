import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {postsService} from "../../services";

const PostDetails = () => {

    const [post, setPost] = useState();

    const {postId} = useParams();

    useEffect(()=>{
        postsService.getById(postId).then(({data})=>setPost(data))
    },[])

    return (
        <div>
            <div>:{}</div>
            <div>:{}</div>
            <div>:{}</div>
            <div>:{}</div>
        </div>
    );
};

export {PostDetails};