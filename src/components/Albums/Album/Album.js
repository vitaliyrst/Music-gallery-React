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
    console.log(album)
    const getAlbumStructure = () => {
        return album.description.map(data => {
            const [tag] = Object.keys(data);
            console.log(tag)

            switch (tag) {
                case 'p' :
                    return data[tag].map((text, index) => (
                        <p key={index} className='album_list_text'>
                            {text}
                        </p>
                    ))
                case 'music' :
                    return data[tag].map((attribute, index) => (
                        <iframe key={index} className='album_list_embed' title={album.title} {...attribute} />
                    ))
                case 'youtube' :
                    return data[tag].map((attribute, index) => (
                        <iframe key={index} className='album_list_youtube' title={album.title} {...attribute}/>
                    ))
                default :
                    return null;
            }
        });
    }

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#c41818' width={150} height={150}/> :

                <div className='album_container'>
                    {album.title}
                    {getAlbumStructure()}
                </div>

            }

        </>
    );
}

export default Album;