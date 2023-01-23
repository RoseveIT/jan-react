import React from "react";

const Human = ({human, serUserId}) => {

    const {id, name, username} = human

    return (
        <div>
            {id} - {name} - {username}
            <button onClick={()=>serUserId(id)}>get post</button>
        </div>
    );
};

export {Human};