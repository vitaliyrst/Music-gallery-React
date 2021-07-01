import React, {useEffect} from "react";
import './News.css';
import Pagination from "./Pagination/Pagination";
import Fallback from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews, setCurrentPostsOnPage} from "../../redux/actions/actions";
import {getCurrentPage, getCurrentPostsOnPage, getLoading, getNews} from "../../redux/selectors";
import {Link} from "react-router-dom";
import aos from 'aos';

const News = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getNews);
    const loading = useSelector(getLoading);
    const currentPage = useSelector(getCurrentPage);
    const currentPostsOnPage = useSelector(getCurrentPostsOnPage);
    const postsPerPage = 4;

    useEffect(() => {
        aos.init({duration: 2000});

        if (/Android|iPhone|iPad|Windows Phone/i.test(navigator.userAgent)) {
            window.scroll({top: 0, behavior: 'smooth'});
        }

    }, [currentPage]);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    useEffect(() => {
        if (!loading && posts.length) {
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            dispatch(setCurrentPostsOnPage(posts.slice(indexOfFirstPost, indexOfLastPost)));
        }
    }, [loading, posts, currentPage, dispatch]);

    const getPostsOnPage = () => {
        return currentPostsOnPage.map((post, index) => (
            <div key={post.id}
                 className='news_list_item'
                 data-aos={index % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}>
                <Link to={`/news/${post.id}`}>
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