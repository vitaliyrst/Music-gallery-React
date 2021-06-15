import React from "react";
import './NavBar.css';
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <header className='app_header'>
            <nav className='navbar_container'>
                <div className='navbar_logo'>
                    <Link className='navbar_logo_link' to='/'>
                        <img
                            className='navbar_logo_img'
                            src={'./assets/images/logo/logo.png'}
                            alt='music gallery logo'
                        />
                    </Link>
                </div>

                <ul className='navbar_list'>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/'>Main</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/gallery'>Gallery</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/news'>News</Link>
                    </li>
                </ul>

                <div className='navbar_auth'>
                    <button className='navbar_auth_button' type='button'> Sign in</button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;