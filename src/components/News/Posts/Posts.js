import React from 'react';
import './Posts.css';
import {Link} from "react-router-dom";

const Posts = ({posts}) => {

    const getPostsList = () => {
        return posts.map(post => (
            <li key={post.id} className='posts_list_item'>
                <Link to={{
                    pathname: `/news/${post.id}`,
                    state: {post: post}
                }}>
                    <div className='posts_list_info_container'
                         style={{backgroundImage: `url("${post.image}")`}}
                    >
                        <div className='posts_list_published'>
                            {post.author} | Published: {post.published}
                        </div>
                    </div>
                </Link>
                <div className='posts_list_title'>{post.title}</div>
            </li>
        ));
    }

    return (
        <ul className='posts_list'>
            {getPostsList()}
        </ul>
    )
}

export default Posts;