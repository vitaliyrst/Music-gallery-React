import React, {useEffect} from "react";
import './Members.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {hideLoader, showLoader} from "../../redux/actions/actions";
import Fallback from "../Loader/Loader";
import {getGroupBiography, getLoading} from "../../redux/selectors";

const Members = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const biography = useSelector(getGroupBiography);

    useEffect(() => {
        biography ? dispatch(hideLoader()) : dispatch(showLoader());
    }, [dispatch, biography]);

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#c41818' width={150} height={150}/> :
                <div className='members_container page'>
                    <div className='members_list'>
                        {biography.map(member => (
                            <div key={member.id} className='members_list_item'>
                                <Link to={`/members/${member.id}`}>
                                    <div className='members_item_image_container'>
                                        <div className='members_item_name'>{member.name}</div>
                                        <img className='members_item_image' src={member.image} alt={member.name}/>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>

    );
}

export default Members;