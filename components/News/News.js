import React, {useEffect, useState} from "react";
import './News.css';
import Posts from "./Posts/Posts";
import Pagination from "../Pagination/Pagination";
import Fallback from "../Loader/Loader";
import {shallowEqual, useSelector} from "react-redux";

const News = () => {
    const postsPerPage = 4;
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState([]);

    const posts = useSelector(({firestore: {ordered}}) => ordered.posts, shallowEqual);

    useEffect(() => {
        if (posts) {
            setLoading(false);
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
        }
    }, [posts, currentPage]);

    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#000000' width={150} height={150}/> :
                <div className='news_container page'>
                    <Posts posts={currentPosts}/>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        currentPage={currentPage}
                        onPaginate={handlePaginate}
                    />
                </div>
            }
        </>
    );
}

export default News;