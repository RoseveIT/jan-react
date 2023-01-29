import React from "react";

const Comment = ({comment}) => {
    const {id, name} = comment
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );
};

export {Comment};