import React from "react";
import './NavBar.css';

import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <header className='app_header'>
            <nav className='navbar_container'>

                <NavLink className='navbar_logo_link' to='/'>
                    <div className='navbar_logo' style={{backgroundImage: 'url("/assets/images/logo/sum41.png")'}}/>
                </NavLink>

                <ul className='navbar_list'>
                    <li className='navbar_list_item'>
                        <NavLink className='navbar_list_item_link' exact to='/'
                                 activeClassName='selected' >Home</NavLink>
                    </li>
                    <li className='navbar_list_item'>
                        <NavLink className='navbar_list_item_link' to='/members'
                                 activeClassName='selected'>Members</NavLink>
                    </li>
                    <li className='navbar_list_item'>
                        <NavLink className='navbar_list_item_link' to='/albums'
                                 activeClassName='selected'>Albums</NavLink>
                    </li>
                    <li className='navbar_list_item'>
                        <NavLink className='navbar_list_item_link' to='/gallery'
                                 activeClassName='selected'>Gallery</NavLink>
                    </li>
                    <li className='navbar_list_item'>
                        <NavLink className='navbar_list_item_link' to='/news/1'
                                 activeClassName='selected'>News</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
