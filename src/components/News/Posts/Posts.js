import React from 'react';
import './Posts.css';
import {Link} from "react-router-dom";

const Posts = ({posts}) => {

    return (
        <ul className='posts_list'>
            {posts.map(post => (
                <li key={post.id} className='posts_list_item'>
                    <Link to={`/news/asdasdsad`}>
                        <div className='posts_list_info_container' style={{backgroundImage: 'url("/assets/images/test/1.jpg")'}}>
                            <div className='posts_list_published'>
                                Valera Kimchitskiy | Published: June 18, 2021
                            </div>
                        </div>
                    </Link>
                    <div className='posts_list_title'>{post.title}</div>
                </li>
            ))}
        </ul>
    )
}

export default Posts;