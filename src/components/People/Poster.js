import React from "react";

const Poster = ({poster}) => {
    const {id, userId, title} = poster
    return (
        <div>
            {id} - {userId} - {title}
        </div>
    );
};

export {Poster};