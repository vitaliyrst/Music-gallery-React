import React, {useEffect} from "react";
import './Album.css';
import {useDispatch, useSelector} from "react-redux";
import {getGroupAlbum, getLoading} from "../../../redux/selectors";
import {hideLoader, showLoader} from "../../../redux/actions/actions";
import {useParams} from "react-router";
import Fallback from "../../Loader/Loader";

const Album = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const loading = useSelector(getLoading);
    const album = useSelector(getGroupAlbum(params.album));

    useEffect(() => {
        album ? dispatch(hideLoader()) : dispatch(showLoader());
    }, [dispatch, album]);

    const getAlbumDescription = () => {
        const description = album.description.find(item => {
            return item.hasOwnProperty('p');
        });

        return description['p'].map((text, index) => (
            <p key={index} className='album_list_item_description'>
                {text}
            </p>
        ));
    }

    const getAlbumVideo = () => {
        const description = album.description.find(item => {
            return item.hasOwnProperty('youtube');
        });

        return description['youtube'].map((attribute, index) => (
            <div key={index} className='album_list_item_youtube_wrapper'>
                <div className='album_list_item_youtube_title'>
                    {attribute.title}
                </div>

                <iframe
                    key={index}
                    className='album_list_item_youtube'
                    title={attribute.title}
                    {...attribute}
                />
            </div>
        ));
    }

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#002D67' width={175} height={175}/> :

                <div className='album_container'>
                    <div className='album_list'>
                        <div className='album_list_item_title'>
                            {album.title}
                        </div>

                        <div className='album_list_item_description_container'>
                            {getAlbumDescription()}
                        </div>

                        <div className='album_list_media'>Media</div>
                        <div className='album_list_item_youtube_container'>
                            {getAlbumVideo()}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Album;