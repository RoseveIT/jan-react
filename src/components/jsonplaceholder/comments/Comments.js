import React, {useEffect, useState} from "react";

import {userService} from "../../../services/userService";
import {Comment} from "./Comment";
import '../posts/Post.css'

const Comments = () => {

    const [comments, setComments] = useState([]);
    const [commentDetails, setCommentDetails] = useState(null)

   useEffect(()=>{
       userService.getComments().then(value => value.data).then(value => setComments([...value]))
   },[])

    return (
        <div>
            <div className='item'>{commentDetails && <div>{commentDetails.id} - {commentDetails.name} - {commentDetails.email} - {commentDetails.body} </div>}</div>

            <hr/>

            {comments.map(comment=><Comment key={comment.id} comment={comment} setCommentDetails={setCommentDetails}/>)}
        </div>
    );
};

export {Comments};