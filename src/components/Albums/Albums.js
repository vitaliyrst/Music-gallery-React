import React, {useEffect} from "react";
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

    useEffect(() => {
        albums ? dispatch(hideLoader()) : dispatch(showLoader());
    }, [dispatch, albums]);

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#c41818' width={150} height={150}/> :

                <div className='albums_container page'>
                    <div className='albums_list'>
                        {albums.map(album => (
                            <div key={album.id} className='albums_list_item'>
                                <Link className='albums_item_link' to={`/albums/${album.title}`}>
                                    <div className='albums_item_title'>{album.title}</div>
                                    <div className='albums_item_image_container'>
                                        <img className='albums_item_image' src={album.image} alt={album.title}/>
                                        <div className='albums_item_timeline'>{album.timeline}</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className='albums_list_item' />
                    </div>
                </div>
            }
        </>
    )
}

export default Albums;