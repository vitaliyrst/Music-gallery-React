import React, {useEffect} from "react";
import './News.css';

import {Link, useParams} from "react-router-dom";
import aos from 'aos';
import "aos/dist/aos.css";

import {useDispatch, useSelector} from "react-redux";
import {fetchNews, setCurrentPostsOnPage} from "../../redux/actions/actions";
import {getCurrentPostsOnPage, getLoading, getNews, getOS} from "../../redux/selectors";

import Pagination from "./Pagination/Pagination";
import Fallback from "../Loader/Loader";

const News = () => {
    const {page} = useParams();
    const postsPerPage = 4;

    const dispatch = useDispatch();
    const posts = useSelector(getNews);
    const loading = useSelector(getLoading);
    const os = useSelector(getOS);
    const currentPostsOnPage = useSelector(getCurrentPostsOnPage);

    useEffect(() => {
        aos.init({duration: 2000});
        if (os) {
            window.scroll({top: 0, behavior: 'smooth'});
        }
    }, [os, page]);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    useEffect(() => {
        if (!loading && posts.length) {
            const indexOfLastPost = page * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            dispatch(setCurrentPostsOnPage(posts.slice(indexOfFirstPost, indexOfLastPost)));
        }
    }, [page, loading, posts, dispatch]);

    const getPostsOnPage = () => {
        return currentPostsOnPage.map((post, index) => (
            <div key={post.id}
                 className='news_list_item'
                 data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}>
                <Link to={`/news/${page}/${post.title}`}>
                    <div className='news_list_item_image_container' style={{backgroundImage: `url("${post.image}")`}}>
                        <div className='news_list_item_published'>
                            {post.author} | Published: {post.published}
                        </div>
                    </div>
                </Link>
                <div className='news_list_item_title'>
                    {post.title}
                </div>
            </div>
        ));
    }

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#002D67' width={175} height={175}/> :
                <>
                    <div className='news_container page'>
                        <div className='news_list'>
                            {getPostsOnPage()}
                        </div>
                    </div>

                    <Pagination/>
                </>
            }
        </>
    );
}

export default News;