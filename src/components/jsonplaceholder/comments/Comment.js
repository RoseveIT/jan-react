import React from "react";

const Comment = ({comment, setCommentDetails}) => {
    const {postId, id, name} = comment
    return (
        <div className='item'>
            {postId} - {id} - {name}
            <button onClick={()=>setCommentDetails(comment)}>Get Info</button>
        </div>
    );
};

export {Comment};