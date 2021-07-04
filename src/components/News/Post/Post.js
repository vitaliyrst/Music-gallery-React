import React, {useEffect} from "react";
import './Post.css';

import {useParams} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {getLoading, getPost} from "../../../redux/selectors";
import {fetchPost} from "../../../redux/actions";

import Fallback from "../../Loader/Loader";

const Post = () => {
    const {title} = useParams();

    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const post = useSelector(getPost);

    useEffect(() => {
        dispatch(fetchPost(title));
    }, [title, dispatch]);

    const getPostDescription = () => {
        if (!loading && post.description) {
            return post.description.map(data => {
                const [tag] = Object.keys(data);

                switch (tag) {
                    case 'p' :
                        return data[tag].map((text, index) => (
                            <p key={index} className='post_block'>
                                {text}
                            </p>
                        ));
                    case 'iframe' :
                        return data[tag].map((attribute, index) => (
                            <iframe key={index} className='post_youtube' title={post.title} {...attribute}/>
                        ));
                    default:
                        return null;
                }
            });
        }
    }

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#002D67' width={175} height={175}/> :

                <div className='post_container'>
                    <div className='post_image' style={{backgroundImage: `url("${post.image}")`}}>
                        <div className='post_additional_info_container'>
                            <div className='post_title'>{post.title}</div>
                            <div className='post_author'>{post.author} | Published: {post.published}</div>
                        </div>

                    </div>
                    <div className='post_description'>
                        {getPostDescription()}
                    </div>
                </div>
            }
        </>
    )
}

export default Post;