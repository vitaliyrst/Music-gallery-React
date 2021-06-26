import React from "react";
import './NavBar.css';
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <header className='app_header'>
            <nav className='navbar_container'>

                <Link className='navbar_logo_link' to='/' >
                    <div className='navbar_logo' style={{backgroundImage: 'url("/assets/images/logo/logo.png")'}}/>
                </Link>

                <ul className='navbar_list'>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/'>Home</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/members'>Members</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/albums'>Albums</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/gallery'>Gallery</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/news'>News</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;