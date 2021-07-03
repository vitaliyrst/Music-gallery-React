import React from "react";
import './Pagination.css';

import {Link, useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import {getTotalPosts} from "../../../redux/selectors";

const Pagination = () => {
    const {page} = useParams();

    const totalPosts = useSelector(getTotalPosts);
    const currentPage = Number(page);

    const postsPerPage = 4;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const getPages = () => {
        let startPage;
        let endPage;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        return [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    }

    return (
        <nav className='pagination_page_container'>
            <ul className='pagination_page_list'>
                <Link to={`/news/${currentPage > 1 ? currentPage - 1 : currentPage}`}>
                    <li className='pagination_page_item'>
                        <img src={'/assets/images/other/arrow-left.png'} alt='arrow left'/>
                    </li>
                </Link>

                {getPages().map(number => (
                    <Link key={number} className='pagination_page_link' to={`/news/${number}`}>
                        <li className={number === currentPage ? 'pagination_page_item active' : 'pagination_page_item'}>
                            {number}
                        </li>
                    </Link>
                ))}
                <Link to={`/news/${currentPage < totalPages ? currentPage + 1 : currentPage}`}>
                    <li className='pagination_page_item'>
                        <img
                            style={{transform: 'rotate(180deg)'}}
                            src={'/assets/images/other/arrow-right.png'} alt='arrow right'/>
                    </li>
                </Link>

            </ul>
        </nav>
    );
}

export default Pagination;