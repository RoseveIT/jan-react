import React from "react";
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,title, userId} = post
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <Link to={id.toString()}>Post Details</Link>
        </div>
    );
};

export {Post};