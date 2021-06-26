import React, {useEffect, useState} from "react";
import './News.css';
import Posts from "./Posts/Posts";
import Pagination from "../Pagination/Pagination";
import Fallback from "../Loader/Loader";
import {shallowEqual, useSelector} from "react-redux";
import {useFirestoreConnect} from "react-redux-firebase";

const News = () => {
    const postsPerPage = 4;
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState([]);

    useFirestoreConnect([{collection: 'posts', orderBy: ['id']}]);
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
                    <iframe src="https://open.spotify.com/embed/playlist/1WNl2Jcnwo6PMM0PhfKmzp" width="100%"
                            height="330" frameBorder="0" allowTransparency="true" allow="encrypted-media">

                    </iframe>
                    <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A2DCzgO12HyMeGxoQlbtvQV&view=coverart"
                            width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>

                    <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/828741755&color=%230c0805&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <div style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden"
                    }}>
                        <a href="https://soundcloud.com/sum41" title="Sum 41" target="_blank"
                           style={{color: "#cccccc", textDecoration: "none"}}>
                            Sum 41
                        </a> · <a
                        href="https://soundcloud.com/sum41/sets/order-in-decline" title="Order In Decline"
                        target="_blank" >Order In Decline</a></div>
                </div>
            }
        </>
    );
}

export default News;