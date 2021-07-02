import React from "react";
import './Pagination.css';

import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getTotalPosts} from "../../../redux/selectors";
import {setCurrentPage} from "../../../redux/actions/actions";

const Pagination = () => {
    const dispatch = useDispatch();
    const totalPosts = useSelector(getTotalPosts);
    const currentPage = useSelector(getCurrentPage);

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

    const handleClickPage = (number) => dispatch(setCurrentPage(number));
    const handleClickMinus = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    }

    const handleClickPlus = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    }

    return (
        <nav className='pagination_page_container'>
            <ul className='pagination_page_list'>
                <li key={123} className='pagination_page_item' onClick={handleClickMinus}>
                    <img src={'/assets/images/other/arrow-left.png'} alt='arrow left'/>
                </li>
                {getPages().map(number => (
                    <li key={number}
                        className={number === currentPage ? 'pagination_page_item active' : 'pagination_page_item'}
                        onClick={() => handleClickPage(number)}>
                        {number}
                    </li>
                ))}
                <li key={456} className='pagination_page_item' onClick={handleClickPlus}>
                    <img
                        style={{transform: 'rotate(180deg)'}}
                        src={'/assets/images/other/arrow-right.png'} alt='arrow right'/>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;