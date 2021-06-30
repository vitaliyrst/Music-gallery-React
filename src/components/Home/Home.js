import React from "react";
import './Home.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getGroupDescription, getLoading} from "../../redux/selectors";

const Home = () => {
    const description = useSelector(getGroupDescription);
    const loading = useSelector(getLoading);

    return (
        <>
            <div className='home_container page'>
                <video className='home_video_container' loop autoPlay muted width='1920' height='1080'>
                    <source
                        src={'https://firebasestorage.googleapis.com/v0/b/music-gallery-f3ad4.appspot.com/o/video%2Fplayback.mp4?alt=media&token=473be39b-3c5a-48f7-8137-daa0cb548a19'}
                        type='video/mp4'/>
                </video>

                {!loading &&
                <>
                    <div className='home_preview_container'>
                        <div className='home_preview'>
                            this website is about my favorite band
                        </div>
                        <div className='home_description'>
                            {description[0]}
                        </div>
                        <div className='home_description'>
                            {description[1]}
                        </div>
                    </div>
                    <div className='home_click_next'>
                        <Link className='home_click_link' to={'/albums'}>click to see more</Link>
                    </div>
                    <div className='home_poster'
                         style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/music-gallery-f3ad4.appspot.com/o/video%2Fposter.jpg?alt=media&token=98e76ff6-4eeb-4837-8ccf-0d05761e0a10)'}}/>
                </>
                }
            </div>
        </>
    );
}

export default Home;