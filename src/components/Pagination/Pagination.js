import React from "react";
import './Pagionation.css';

const Pagination = ({postsPerPage, totalPosts, onPaginate, currentPage}) => {
    const pageNumbers = [];
    const totalPage = Math.ceil(totalPosts / postsPerPage);

    if (totalPage > 7) {
        if (currentPage > 4) {
            for (let i = currentPage - 3; i <= currentPage + 3; i++) {
                pageNumbers.push(i);
                if (i === totalPage) {
                    break;
                }
            }
        } else {
            for (let i = 1; i <= 7; i++) {
                pageNumbers.push(i);
                if (i === totalPage) {
                    break;
                }
            }
        }
    } else {
        for (let i = 1; i <= totalPage; i++) {
            pageNumbers.push(i);
        }
    }

    return (
        <nav className='pagination_page_container'>
            <ul className='pagination_page_list'>
                {pageNumbers.map(number => (
                    <li key={number} className='pagination_page_item' onClick={() => onPaginate(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;