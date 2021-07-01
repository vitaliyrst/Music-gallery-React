import React, {useEffect, useRef, useState} from "react";
import './Albums.css';
import {useDispatch, useSelector} from "react-redux";
import {getGroupAlbums, getLoading} from "../../redux/selectors";
import {hideLoader, showLoader} from "../../redux/actions/actions";
import Fallback from "../Loader/Loader";
import {Link} from "react-router-dom";

const Albums = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const albums = useSelector(getGroupAlbums);
    const additionalRefs = useRef([]);
    const [showPlayer, setShowPlayer] = useState({state: false, index: null, description: null});
    const [divIndex, setDivIndex] = useState(null);

    useEffect(() => {
        albums ? dispatch(hideLoader()) : dispatch(showLoader());
    }, [dispatch, albums]);

    const addToRefs = (element) => {
        if (element && !additionalRefs.current.includes(element)) {
            additionalRefs.current.push(element);
        }
    }
    const getPlayer = (description) => {
        return description['music'].map((attribute, index) => (
            <iframe
                key={index}
                className='albums_item_player'
                title={attribute.title}
                {...attribute}
            />
        ));
    }

    const handlePointerDown = (eo, index) => {
        if (index !== divIndex) {
            if (divIndex === null) {
                const newDiv = additionalRefs.current.find((element, i) => i === index);
                newDiv.classList.remove('hide');
                newDiv.classList.add('show');
                setDivIndex(index);
            } else {
                const newDiv = additionalRefs.current.find((element, i) => i === index);
                newDiv.classList.remove('hide');
                newDiv.classList.add('show');

                const oldDiv = additionalRefs.current[divIndex];
                oldDiv.classList.remove('show');
                oldDiv.classList.add('hide');
                setDivIndex(index);
            }
        }
    }

    const handleClickPlayer = (state, index, description) => setShowPlayer({...showPlayer, state, index, description});
    const handleHidePlayer = () => setShowPlayer({state: false, index: null, description: null})

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#002D67' width={175} height={175}/> :

                <div className='albums_container page'>
                    <div className='albums_list'>

                        {albums.map((album, index) => (
                            <div key={album.id} className='albums_list_item'
                                 onPointerDown={(eo) => handlePointerDown(eo, index)}>

                                <div className='albums_item_title'>
                                    {album.title}
                                </div>

                                <div className='albums_item_image_container'>
                                    <img className='albums_item_image' src={album.image} alt={album.title}/>

                                    <div className='albums_item_timeline'>
                                        {album.timeline}
                                    </div>

                                    <div ref={addToRefs} className='albums_item_additional_window'>
                                        <Link className='albums_item_link' to={`/albums/${album.title}`}>
                                            <div className='albums_item_additional_read'>
                                                Read More
                                            </div>
                                        </Link>

                                        <div className='albums_item_additional_listen'
                                             onClick={() => handleClickPlayer(true, index, album.description[1])}
                                        >
                                            Show Player
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='albums_list_item'/>
                        {showPlayer.state &&
                        <div className='albums_item_player_wrapper'>
                            <div className='albums_item_player_container'>
                                <div className='albums_item_player_hide' onClick={handleHidePlayer}>
                                    Hide Player
                                </div>
                                {getPlayer(showPlayer.description)}
                            </div>
                        </div>}
                    </div>
                </div>
            }
        </>
    )
}

export default Albums;