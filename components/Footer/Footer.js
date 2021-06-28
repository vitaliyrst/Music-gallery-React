import React from "react";
import './Footer.css';

const Footer = () => {
    const handleOpenLink = link => window.open(link);

    return (
        <footer className='app_footer'>
            <div className='footer_container'>
                <ul className='footer_icon_list'>
                    <li className='footer_icon_list_item'
                        style={{backgroundImage: 'url("/assets/images/social/github.svg")'}}
                        onClick={() => handleOpenLink('https://github.com/vitaliyrst')}/>

                    <li className='footer_icon_list_item'
                        style={{backgroundImage: 'url("/assets/images/social/link.svg")'}}
                        onClick={() => handleOpenLink('https://www.linkedin.com/in/vitaliy-klubkou/')}/>

                    <li className='footer_icon_list_item'
                        style={{backgroundImage: 'url("/assets/images/social/telegram.svg")'}}
                        onClick={() => handleOpenLink('https://t.me/vitaliyrst')}/>
                </ul>

                <div className='footer_year'>
                    &copy;2021 Music
                </div>
            </div>
        </footer>
    );
}

export default Footer;