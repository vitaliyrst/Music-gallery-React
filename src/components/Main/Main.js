import React, {useEffect, useState} from "react";
import './Main.css';
import Posts from "./Posts/Posts";
import Pagination from "../Pagination/Pagination";
import Fallback from "../Loader/Loader";

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(15);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            setPosts(result);
            setTimeout(() => {
                setLoading(false);
            }, 2000)

        }

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#000000' width={150} height={150}/> :
                <div className='main_container page'>
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

export default Main;