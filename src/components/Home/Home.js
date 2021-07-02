import React from "react";
import './Home.css';

import {Link} from "react-router-dom";

import {useSelector} from "react-redux";
import {getGroupDescription, getLoading, getOS} from "../../redux/selectors";

const Home = () => {
    const description = useSelector(getGroupDescription);
    const loading = useSelector(getLoading);
    const os = useSelector(getOS);

    return (
        <>
            <div className='home_container page'>
                {!os &&
                <video className='home_video_container' loop autoPlay muted width='1920' height='1080'>
                    <source
                        src={'https://firebasestorage.googleapis.com/v0/b/sum41-music.appspot.com/o/sum41%2Fvideo%2Fplayback.mp4?alt=media&token=535eb77e-e9e2-4ba9-b7d0-a1b18874aca4'}
                        type='video/mp4'/>
                </video>}

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
                         style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/sum41-music.appspot.com/o/sum41%2Fvideo%2Fposter.jpg?alt=media&token=8a49d403-c413-4416-b656-41f4c95eb2c9)'}}/>
                </>
                }
            </div>
        </>
    );
}

export default Home;