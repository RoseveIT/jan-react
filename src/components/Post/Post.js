import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate();

    const {id,title, userId} = post

    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>navigate(id.toString(), {state:post})}>post details</button>
            {/*<Link to={id.toString()} state={{...post}}>Post Details</Link>*/}
        </div>
    );
};

export {Post};