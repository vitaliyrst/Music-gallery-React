import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import './Post.css';
import {useFirestoreConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import Fallback from "../../Loader/Loader";

const Post = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useFirestoreConnect([{collection: 'posts', doc: id}]);
    const post = useSelector(({firestore: {data}}) => data.posts && data.posts[id]);

    useEffect(() => {
        if (post) {
            setLoading(false);
        }
    }, [post]);

    const getPostDescription = () => {
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

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#000000' width={150} height={150}/> :

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