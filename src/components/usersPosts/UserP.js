import React from "react";

const UserP = ({userPost, userId}) => {
    const {id, name, username} = userPost
    return (
        <div>
            {id} - {name} - {username}
            <button onClick={()=>userId(id)}>get posts</button>
        </div>
    );
};

export {UserP};