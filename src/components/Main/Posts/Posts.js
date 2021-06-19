import React from 'react';
import './Posts.css';

const Posts = ({posts}) => {

    return (
        <ul className='posts_list'>
            {posts.map(post => (
                <li key={post.id}>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </li>
            ))}
        </ul>
    )
}

export default Posts;