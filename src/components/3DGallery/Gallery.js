import React, {useEffect, useRef} from 'react';
import './Gallery.css';
import Scene from "./Scene/Scene";
import {useDispatch, useSelector} from "react-redux";
import {setEnter} from "../../redux/actions";
import {getEnterState} from "../../redux/selectors";

const Gallery = () => {
    const dispatch = useDispatch();
    const canvasContainer = useRef();
    const enterButton = useRef();
    const entered = useSelector(getEnterState);

    useEffect(() => {
        if (!entered) {
            canvasContainer.current.classList.remove('enter');
            enterButton.current.style.zIndex = '1';
        }
    }, [entered]);

    const handleClickFullScreen = () => {
        dispatch(setEnter(true));
        canvasContainer.current.classList.add('enter');
        enterButton.current.style.zIndex = '-1';
    }

    return (
        <div className='gallery_main_container'>
            <div ref={enterButton} className='gallery_enter' onClick={handleClickFullScreen}>
                Click enter
            </div>
            <div ref={canvasContainer} className='gallery_canvas_container'>
                <Scene/>
            </div>
        </div>
    );
}

export default Gallery;