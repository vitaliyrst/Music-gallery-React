import React, {useEffect} from "react";
import './Members.css';

import aos from 'aos';
import "aos/dist/aos.css";

import {useDispatch, useSelector} from "react-redux";
import {hideLoader, showLoader} from "../../redux/actions";
import {getGroupBiography, getLoading} from "../../redux/selectors";

import Fallback from "../Loader/Loader";

const Members = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const biography = useSelector(getGroupBiography);

    useEffect(() => {
        aos.init({duration: 2000});
        biography ? dispatch(hideLoader()) : dispatch(showLoader());
    }, [dispatch, biography]);

    return (
        <>
            {loading ?
                <Fallback className='loader' type='Puff' color='#002D67' width={175} height={175}/> :

                <div className='members_container page'>
                    <div className='members_list'>
                        {biography.map((member, index) => (
                            <div key={member.id}
                                 data-aos={index === 0 ? 'fade-left' : index === 1 ? 'fade-right' : 'flip-left'}
                                 className='members_list_item'
                            >
                                <div className='members_item_name'>{member.name}</div>
                                <img className='members_item_image'
                                     style={{
                                         float: index % 2 === 0 ? 'right' : 'left',
                                         marginLeft: index % 2 !== 0 && '0',
                                         marginRight: index % 2 === 0 && '0'
                                     }}
                                     src={member.image}
                                     alt={member.name}/>
                                <div className='members_list_item_wrapper'>

                                    {member.description.map((item, index) => (
                                        <div key={index} className='members_item_description'>{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>

    );
}

export default Members;