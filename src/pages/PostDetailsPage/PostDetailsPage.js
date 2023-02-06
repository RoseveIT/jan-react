import React from "react";
import {useParams} from "react-router-dom";

import {PostDetails} from "../../components";

const PostDetailsPage = () => {

    const {postId} = useParams();

    return (
        <div>
            <PostDetails postId={postId}/>
        </div>
    );
};

export {PostDetailsPage};