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
                        <Link className='navbar_list_item_link' to='/'>Main</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/groups'>Groups</Link>
                    </li>
                    <li className='navbar_list_item'>
                        <Link className='navbar_list_item_link' to='/3d-gallery'>3D Gallery</Link>
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