import React, {useEffect, useState} from "react";
import {postsService} from "../../services";

const PostDetails = ({postId, state}) => {

    const [post, setPost] = useState(null);

    useEffect(()=>{
        if (state){
            setPost({...state})
        }else{
            postsService.getById(postId).then(({data})=>setPost(data))
        }
    },[postId, state])

    return (
        <div>
            {post&&
                <>
                <div>id:{post.id}</div>
                <div>userId:{post.userId}</div>
                <div>title:{post.title}</div>
                <div>body:{post.body}</div>
                </>
            }
        </div>
    );
};

export {PostDetails};