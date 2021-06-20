import React from "react";
import {useLocation} from 'react-router-dom';
import './Post.css';

const Post = () => {
const location = useLocation();
const post = location.state.post

    return (
        <div>{post.description}</div>
    )
}

export default Post;