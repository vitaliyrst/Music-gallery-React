import React, {useEffect, useRef} from 'react';
import './Gallery.css';
import Scene from "./Scene/Scene";
import {useDispatch, useSelector} from "react-redux";
import {setEnter} from "../../redux/actions";
import {getEnterState, getModelsLoading} from "../../redux/selectors";

const Gallery = () => {
    const canvasContainer = useRef();
    const enterButton = useRef();

    const dispatch = useDispatch();
    const entered = useSelector(getEnterState);
    const modelsLoading = useSelector(getModelsLoading);

    useEffect(() => {
        if (!entered && modelsLoading) {
            canvasContainer.current.classList.remove('enter');
            enterButton.current.style.zIndex = '1';
        }
    }, [entered, modelsLoading]);

    const handleClickFullScreen = () => {
        dispatch(setEnter(true));
        canvasContainer.current.classList.add('enter');
        enterButton.current.style.zIndex = '-1';
    }

    return (
        <div className='gallery_main_container'>
            {modelsLoading &&
            <div ref={enterButton} className='gallery_enter' onClick={handleClickFullScreen}>
                Click enter
            </div>}

            <div ref={canvasContainer} className='gallery_canvas_container'>
                <Scene/>
            </div>
        </div>
    );
}

export default Gallery;
