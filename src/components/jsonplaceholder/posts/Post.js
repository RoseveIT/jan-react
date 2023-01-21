import React from "react";

import './Post.css'

const Post = ({post, setPostDetails}) => {
    const {userId, id, title} = post
    return (
        <div className='item'>
            <div>{userId} - {id} - {title}</div>
            <button onClick={()=>setPostDetails(post)}>Get Info</button>
        </div>
    );
};

export {Post};